import BlogEditForm from "@/components/BlogEditForm";
import prisma from "@/db/prisma";

const EditBlog = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await prisma.blog.findUnique({ where: { id } });

  return (
    <div>
      <BlogEditForm blog={blog!} />
    </div>
  );
};

export default EditBlog;
