"use client";
import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { z } from "zod";

import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./text-area";
import TextAnimationEffect from "./text-animation-effect";

import { cn } from "@/lib/utils";
import { EmailFormData, getEmailConfig } from "@/action/email";

const EmailFormSchema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [emailConfig, setEmailConfig] = useState<{
    serviceId?: string;
    templateId?: string;
    publicKey?: string;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(EmailFormSchema),
  });

  useEffect(() => {
    // Fetch email configuration on component mount
    const fetchConfig = async () => {
      try {
        const config = await getEmailConfig();

        setEmailConfig(config);
      } catch (error) {
        console.error("Failed to fetch email config:", error);
        toast.error("Failed to initialize email service");
      }
    };

    fetchConfig();
  }, []);

  const onSubmit = async (data: EmailFormData) => {
    try {
      if (
        !emailConfig.serviceId ||
        !emailConfig.templateId ||
        !emailConfig.publicKey
      ) {
        throw new Error("Email configuration is missing");
      }

      if (!form.current) {
        throw new Error("Form reference is missing");
      }

      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        {
          publicKey: emailConfig.publicKey,
        }
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl  shadow-input ">
      <div className="text-center">
        <TextAnimationEffect
          text="Contact Me"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
        />
      </div>
      <form
        ref={form}
        className="my-8 justify-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input required id="name" type="text" {...register("user_name")} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input required id="email" type="email" {...register("user_email")} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            required
            id="message"
            placeholder="I want to tell you that..."
            {...register("message")}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : <p>Send Message &rarr;</p>}

          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
