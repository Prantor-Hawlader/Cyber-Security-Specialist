import Link from "next/link";
import React from "react";
import { Blog } from "@prisma/client";

import BlogLayoutOne from "./BlogLayoutOne";
interface Props {
  blogs: Blog[];
}
const RecentPosts = ({ blogs }: Props) => {
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
          href="/blog"
        >
          view all
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {blogs.map((blog: any) => (
          <article key={blog.id} className="col-span-1 row-span-1 relative">
            <BlogLayoutOne blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
