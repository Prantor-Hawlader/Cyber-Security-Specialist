"use client";
import Link from "next/link";

import { EvervaultCard } from "./evervault-card";

import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          href={item?.link}
        >
          <EvervaultCard />
        </Link>
      ))}
    </div>
  );
};
