"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import Link from "next/link";

import image from "../public/cyber.webp";

import KamrulImage from "@/public/kamrul.jpg";

const BlogCover = ({ blog }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [imageHeight, setImageHeight] = useState(0);

  const { scrollY } = useScroll();

  const titleY = useTransform(
    scrollY,
    [0, imageHeight, imageHeight - 270],
    [0, imageHeight, imageHeight]
  );

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        {/* <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
          {blog.title}
        </h1>
      </div> */}
        <div
          ref={imageRef}
          className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40"
        />
        <Image
          priority
          alt={blog.title}
          blurDataURL={blog.title}
          className="aspect-square w-full h-full object-cover object-center blur-sm opacity-80"
          height={100}
          placeholder="blur"
          sizes="100vw"
          src={blog.image || image}
          width={100}
        />
      </div>
      <motion.div
        ref={titleRef}
        className="flex items-center justify-center inset-0 bg-opacity-40"
        style={{
          y: titleY,
          position: "absolute",
          top: 20,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <h1 className=" font-extrabold text-3xl max-w-2xl transition-colors duration-300">
          {blog.title}
        </h1>
      </motion.div>
      <main className="px-24 flex justify-center">
        <div className="max-w-2xl">
          <p className="mb-6 text-slate-400 ">
            Posted on {format(new Date(blog?.createdAt || ""), "MMMM dd, yyyy")}
          </p>

          <div className="markdown-body dark:bg-transparent dark:text-gray-200">
            <ReactMarkdown>{blog?.description}</ReactMarkdown>
          </div>
          <div className="mt-12 flex items-center p-4 border-t border-b border-gray-200">
            <Image
              alt="Kamrul Hassan"
              className="w-12 h-12 rounded-full object-cover mr-4"
              src={KamrulImage}
            />

            <div>
              <Link
                className="text-lg font-mono bg-clip-text  text-transparent bg-gradient-to-b font-bold from-[#00b7fa] to-[#01cfea]"
                href={`/about`}
              >
                Kamrul Hassan
              </Link>
              <p className="text-sm text-gray-600">
                With over a decade of experience in the cybersecurity field, I
                have dedicated my career to protecting digital assets and
                educating others about the importance of robust security
                practices.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogCover;
