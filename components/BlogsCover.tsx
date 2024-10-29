import Image from "next/image";
import Link from "next/link";
import React from "react";

import image from "../public/hacker.jpg";
import { Button, MovingBorder } from "./ui/moving-border";
import { cn } from "@/lib/utils";

const BlogsCover = ({ blog }: any) => {
  return (
    <div className="w-full">
      <Button borderRadius="1.75rem" className="w-full inline-block">
        <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]">
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
          />
          <Image
            fill
            priority
            alt={blog[0].title}
            blurDataURL={blog[0].title}
            className="w-full h-full object-center object-cover rounded-3xl"
            placeholder="blur"
            sizes="100vw"
            src={image}
          />
          <div className="w-full text-white lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <p className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Cyber Security
            </p>
            <Link className="mt-6" href={`/blog/${blog[0].id}`}>
              <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
                <span
                  className="bg-gradient-to-r from-green-200 to-green-400
              bg-[length:0px_2px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]"
                >
                  {blog[0].title}
                </span>
              </h1>
            </Link>
          </div>
        </article>
      </Button>
    </div>
  );
};

export default BlogsCover;
