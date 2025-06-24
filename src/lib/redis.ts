import * as Sentry from "@sentry/nextjs";
import { Redis } from "@upstash/redis";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config({ path: ".env.local" }));

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

redis.get("healthcheck").catch((err) => {
  console.error("Upstash Redis error: ", err);
  Sentry.captureException(err);
});
