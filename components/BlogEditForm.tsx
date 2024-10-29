"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import "react-markdown-editor-lite/lib/index.css";
import toast from "react-hot-toast";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

import "react-quill/dist/quill.snow.css";
import { Blog } from "@prisma/client";

import SubmitButton from "./SubmitButton";

import { editBlog } from "@/action/blog";
type Props = {
  blog: Blog;
};
export default function BlogEditForm({ blog }: Props) {
  const [value, setValue] = useState("");
  const blogId = blog.id;

  const handleFormSubmit = async (formData: FormData) => {
    if (!value) {
      alert("Description required");
    }
    const res = await editBlog(formData, blogId);

    if (res?.status) {
      toast.success("Successfully Blog has been edited");
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  return (
    <form action={handleFormSubmit} className="w-full mx-auto mt-8">
      <Input
        isRequired
        className="mb-4"
        defaultValue={blog.title}
        label="Blog title"
        name="title"
        type="text"
      />
      <h3 className="text-default-500 text-small mb-1">Blog description</h3>
      <Input name="description" type="hidden" value={value} />
      <SimpleMDE
        aria-required
        defaultValue={blog.description}
        placeholder="Write description..."
        value={value}
        onChange={setValue}
      />
      <div className="mb-4">
        <Input label="Upload image" name="image" type="file" />
      </div>
      <SubmitButton className="" title={"Editing"}>
        Create Blog
      </SubmitButton>
    </form>
  );
}
