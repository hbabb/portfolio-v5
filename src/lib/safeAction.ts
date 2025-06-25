import type { MiddlewareResult } from "next-safe-action";

import * as Sentry from "@sentry/nextjs";
import { createSafeActionClient } from "next-safe-action";

import { redis } from "@/lib/redis";

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    Sentry.captureException(error);
    return "Something went wrong. Please try again later.";
  },
  // eslint-disable-next-line ts/no-empty-object-type
}).use(async ({ clientInput, next }): Promise<MiddlewareResult<string, {}>> => {
  const email =
    typeof clientInput === "object" && clientInput && "email" in clientInput
      ? String(clientInput.email).toLowerCase()
      : null;

  if (!email) 
return next();

  const key = `rate-limit:contact:${email}`;
  const maxAttempts = 3;
  const ttl = 60 * 5;

  try {
    const attempts = await redis.incr(key);
    Sentry.captureMessage(`Contact rate-limit: ${email} = ${attempts}`, "info");
    if (attempts === 1) 
await redis.expire(key, ttl);

    if (attempts > maxAttempts) {
      Sentry.captureMessage(`Rate limit exceeded: ${email}`);
      return {
        success: false,
        serverError: "Too many messages. Try again later.",
      };
    }

    return next();
  } catch (err) {
    Sentry.captureException(err);
    return {
      success: false,
      serverError: "Rate limiting failed.",
    };
  }
});
