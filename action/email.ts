"use server";

import { z } from "zod";

// Define the email form schema
const EmailFormSchema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type EmailFormData = z.infer<typeof EmailFormSchema>;

// This function now just returns the config instead of sending email
export async function getEmailConfig() {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing required environment variables for EmailJS");
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}
