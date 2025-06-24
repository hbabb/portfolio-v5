"use server";

import * as Sentry from "@sentry/nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { flattenValidationErrors } from "next-safe-action";
import { Resend } from "resend";
import { z } from "zod";

import { actionClient } from "@/lib/safeAction";

expand(config({ path: ".env.local" }));

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/, "Malformed email"),
  message: z.string().min(50, "Message is required"),
  botField: z.string().max(0, "Spam detected"),
});

export const sendContactEmail = actionClient
  .inputSchema(ContactSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput }) => {
    const { name, email, message } = parsedInput;

    try {
      await resend.emails.send({
        from: "Portfolio Contact <no-reply@heath-babb.dev>",
        to: [process.env.CONTACT_TO!],
        subject: "New Message from Portfolio",
        replyTo: email,
        html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
                `,
      });

      return { success: true };
    } catch (error) {
      Sentry.captureException(error);
      return { success: false };
    }
  });
