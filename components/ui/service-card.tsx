"use client";
import { HoverEffect } from "./card-hover-effect";
import TextAnimationEffect from "./text-animation-effect";

export function CardHoverEffect() {
  return (
    <div className="text-center max-w-5xl mx-auto px-8">
      <TextAnimationEffect
        text="Services I Provide"
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
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Service 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat!",
    link: "https://stripe.com",
  },
  {
    title: "Service 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat!",
    link: "https://netflix.com",
  },
  {
    title: "Service 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat!",
    link: "https://google.com",
  },
];
