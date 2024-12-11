import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";

import ContactBtn from "@/components/ContactBtn";
import { title } from "@/components/primitives";
import KamrulImage from "@/public/kamrul.jpg";
import Example from "@/components/example";
export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className={title({ color: "cyan", size: "sm" })}>
            About Kamrul Hassan
          </h1>

          <p className="text-xl text-gray-400">
            Cybersecurity Specialist | Ethical Hacker | Security Consultant
          </p>
        </header>
        <Example />

        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            With over a decade of experience in the cybersecurity field, I have
            dedicated my career to protecting digital assets and educating
            others about the importance of robust security practices. My passion
            lies in staying one step ahead of cyber threats and helping
            organizations build resilient security infrastructures.
          </p>
          <div className="flex justify-center">
            <Image
              alt="Kamrul Hassan"
              className="rounded-full border-4 border-blue-500 shadow-lg"
              height={200}
              src={KamrulImage}
              width={200}
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="mb-6 text-lg">
            Let&apos; work together to protect your assets and build a robust
            security strategy.
          </p>
          <ContactBtn />
        </section>

        <footer className="pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <a
              className="text-gray-400 hover:text-blue-500 transition-colors"
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">LinkedIn</span>
              <IconBrandLinkedin className="h-6 w-6" />
            </a>
            <a
              className="text-gray-400 hover:text-blue-500 transition-colors"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">Facebook</span>
              <IconBrandFacebook className="h-6 w-6" />
            </a>
            <a
              className="text-gray-400 hover:text-green-500 transition-colors"
              href="https://wa.me/1234567890"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">WhatsApp</span>
              <IconBrandWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
