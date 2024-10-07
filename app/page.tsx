import { ContactForm } from "@/components/ui/contact-form";
import { LampEffect } from "@/components/ui/lamp-effect";
import { CardHoverEffect } from "@/components/ui/service-card";
import { TimelineMotion } from "@/components/ui/timeline-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <LampEffect />
      <CardHoverEffect />
      <TimelineMotion />
      <ContactForm />
    </section>
  );
}
