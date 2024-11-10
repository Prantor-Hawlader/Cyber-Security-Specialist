import dynamic from "next/dynamic";

import prisma from "@/db/prisma";
import { getSession } from "@/lib/session";
import AddBlogBtn from "@/components/AddBlogBtn";

export default async function BlogPage() {
  const BlogsCover = dynamic(() => import("@/components/BlogsCover"));

  const Blogs = dynamic(() => import("@/components/Blogs"));

  const blogs = await prisma.blog.findMany();
  const session = await getSession();

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      {session && <AddBlogBtn />}
      <BlogsCover blog={blogs} />
      <Blogs blogs={blogs} session={session!} />
    </div>
  );
}
