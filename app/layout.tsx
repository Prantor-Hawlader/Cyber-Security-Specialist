import "@/styles/globals.css";
import "@mdxeditor/editor/style.css";

import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { CopyToaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full flex-grow">
              {children}
              <Toaster position="top-center" />
            </main>
            <footer className="w-full flex items-center justify-center py-3 gap-2">
              <div className="flex items-center gap-1 text-current">
                <span>&copy; 2024 Kamrul Hassan |</span>
                <span className="text-default-600">Developed by</span>
                <a
                  className="text-primary"
                  href="https://www.linkedin.com/in/prantor-hawlader/"
                  target="__blank"
                >
                  Prantor Hawlader
                </a>
              </div>
            </footer>
            <CopyToaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
