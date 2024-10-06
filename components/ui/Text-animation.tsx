"use client";
import React from "react";

import TextAnimationEffect from "./text-animation-effect";

function TextAnimation() {
  return (
    <div className="mt-10 py-6 text-center">
      <TextAnimationEffect
        classname="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight  md:text-5xl"
        text="Contact with me"
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
  );
}

export default TextAnimation;
