import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Blog } from "@prisma/client";

import image from "../public/cyber.webp";

type Props = {
  blog: Blog;
};
const BlogLayoutOne = ({ blog }: Props) => {
  return (
    <div className="flex w-full gap-1 justify-start">
      <div className="flex flex-col items-center group">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Image
            alt={blog.title}
            className="aspect-[4/3]  w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
            height={100}
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
            src={blog.image || image}
            width={100}
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <Link className="inline-block my-1" href={`/blog/${blog.id}`}>
            <h2 className="font-semibold capitalize  text-base sm:text-lg">
              <span
                className="bg-gradient-to-r from-green-200 to-green-400
        bg-[length:0px_2px]
        bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]"
              >
                {blog.title}
              </span>
            </h2>
          </Link>

          <span className="capitalize text-gray-400 font-semibold text-sm  sm:text-base">
            {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
