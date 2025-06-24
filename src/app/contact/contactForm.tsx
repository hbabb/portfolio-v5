"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { FormInput } from "@/components/form/formInput";
import { FormTextarea } from "@/components/form/formTextArea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { sendContactEmail } from "@/server/actions/contact";

const ContactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z
    .string()
    .email("Invalid email")
    .regex(/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/, "Malformed email"),
  message: z.string().min(50, "Message is required"),
  botField: z.string().max(0, "Spam detected"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      botField: "",
    },
  });

  const { execute, result, status } = useAction(sendContactEmail);

  const onSubmit = (data: ContactFormData) => {
    execute(data);
  };

  useEffect(() => {
    if (result?.data?.success) {
      toast.success("Message sent successfully!");
      form.reset();
    } else if (result?.serverError) {
      toast.error(result.serverError);
    }
  }, [result, form]);

  return (
    <Card className="mx-auto w-full max-w-2xl rounded-xl border border-white/10 bg-black/30 text-slate-100 shadow-xl backdrop-blur-md">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-6">
            <FormInput
              form={form}
              name="name"
              label="Name"
              required
              placeholder="John Doe"
              className="border border-slate-400 bg-black/20 placeholder:text-slate-300 focus-visible:ring-slate-300"
            />
            <FormInput
              form={form}
              name="email"
              label="Email"
              required
              type="email"
              placeholder="you@example.com"
              className="border border-slate-400 bg-black/20 placeholder:text-slate-300 focus-visible:ring-slate-300"
            />
            <FormTextarea
              form={form}
              name="message"
              label="Message"
              required
              placeholder="Enter your message here"
              minHeight="min-h-32"
              className="border border-slate-400 bg-black/20 placeholder:text-slate-300 focus-visible:ring-slate-300"
            />

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              {...form.register("botField")}
              className="hidden"
            />
          </CardContent>

          <CardFooter className="flex flex-row justify-between">
            <Button
              type="submit"
              disabled={status === "executing"}
              className="relative rounded-md bg-sky-600 px-4 py-2 font-semibold text-white shadow-lg transition duration-300 hover:bg-sky-700 hover:shadow-sky-500/50 focus:ring-2 focus:ring-sky-500/50 focus:outline-none"
            >
              {status === "executing" ? "Sending..." : "Send Message"}
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-md border-2 border-blue-700 bg-transparent px-4 py-2 font-semibold text-slate-200 shadow-lg transition duration-300 hover:shadow-sky-800/50 focus:ring-2 focus:ring-sky-700/50 focus:outline-1"
            >
              <Link href="/">Home</Link>
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
