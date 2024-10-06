import { ContactForm } from "@/components/ui/contact-form";
import { LampEffect } from "@/components/ui/lamp-effect";
import { CardHoverEffect } from "@/components/ui/service-card";
import TextAnimation from "@/components/ui/Text-animation";
import { TimelineMotion } from "@/components/ui/timeline-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center ">
      <LampEffect />
      <CardHoverEffect />
      <TimelineMotion />
      <TextAnimation />
      <ContactForm />
    </section>
  );
}
