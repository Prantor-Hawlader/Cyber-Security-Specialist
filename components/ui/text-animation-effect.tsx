import React from "react";
import { motion, Variant } from "framer-motion";

import { cn } from "@/lib/utils";
type Direction = "up" | "down" | "left" | "right";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const generateVariants = (
  direction: Direction
): { hidden: Variant; visible: Variant } => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "right" || direction === "down" ? 100 : -100;

  return {
    hidden: { filter: "blur(10px)", opacity: 0, [axis]: value },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
};

const defaultViewport = { amount: 0.3, margin: "0px 0px 0px 0px" };

const TextAnimationEffect = ({
  as = "h1",
  text,
  classname = "",
  viewport = defaultViewport,
  variants,
  direction = "down",
  letterAnime = false,
  lineAnime = false,
}: {
  text: string;
  classname?: string;
  as?: keyof JSX.IntrinsicElements;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  variants?: {
    hidden?: any;
    visible?: any;
  };
  direction?: Direction;
  letterAnime?: boolean;
  lineAnime?: boolean;
}) => {
  const baseVariants = variants || generateVariants(direction);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      //   transition: {
      //     ...baseVariants.visible.transition,
      //     delay, // Apply custom delay here
      //   },
    },
  };
  const MotionComponent = motion[as as keyof typeof motion];

  return (
    <>
      <>
        <MotionComponent
          className={cn(`inline-block text-white uppercase  `, classname)}
          initial="hidden"
          variants={containerVariants}
          viewport={viewport}
          whileInView="visible"
        >
          {lineAnime ? (
            <>
              {" "}
              <motion.span
                className={`inline-block `}
                variants={modifiedVariants}
              >
                {text}
              </motion.span>
            </>
          ) : (
            <>
              {text.split(" ").map((word: string, index: number) => (
                <motion.span
                  key={index}
                  className={`inline-block `}
                  variants={letterAnime === false ? modifiedVariants : {}}
                >
                  {letterAnime ? (
                    <>
                      {word.split("").map((letter: string) => (
                        <>
                          <motion.span
                            className={`inline-block `}
                            variants={modifiedVariants}
                          >
                            {letter}
                          </motion.span>
                        </>
                      ))}
                      &nbsp;
                    </>
                  ) : (
                    <>{word}&nbsp;</>
                  )}
                </motion.span>
              ))}
            </>
          )}
        </MotionComponent>
      </>
    </>
  );
};

export default TextAnimationEffect;
