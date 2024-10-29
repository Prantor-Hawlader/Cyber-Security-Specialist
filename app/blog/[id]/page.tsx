import "github-markdown-css";
import prisma from "@/db/prisma";
import BlogCover from "@/components/BlogCover";
import RecentPosts from "@/components/RecentPosts";
const Blog = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await prisma.blog.findUnique({ where: { id } });
  const recentBlogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <>
      <BlogCover blog={blog} />

      <RecentPosts blogs={recentBlogs} />
    </>
  );
};

export default Blog;
