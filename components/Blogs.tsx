import React from "react";
import { Blog } from "@prisma/client";
import { Session } from "next-auth";

import BlogLayoutThree from "./BlogLayoutThree";
interface BlogsProps {
  blogs: Blog[];
  session: Session;
}
const Blogs = ({ blogs, session }: BlogsProps) => {
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          All Posts
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {blogs.map((blog: any) => (
          <article key={blog.id} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} session={session} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
