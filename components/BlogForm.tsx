"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import "react-markdown-editor-lite/lib/index.css";
import toast from "react-hot-toast";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

import "react-quill/dist/quill.snow.css";
import SubmitButton from "./SubmitButton";

import { createBlog } from "@/action/blog";

export default function BlogForm() {
  const [value, setValue] = useState("");

  const handleFormSubmit = async (formData: FormData) => {
    const res = await createBlog(formData);

    if (res?.status) {
      toast.success("Successfully created Blog");
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
        label="Blog title"
        name="title"
        type="text"
      />
      <h3 className="text-default-500 text-small mb-1">Blog description</h3>
      <Input name="description" type="hidden" value={value} />
      <SimpleMDE
        placeholder="Write description..."
        value={value}
        onChange={setValue}
      />
      <div className="mb-4">
        <Input label="Upload image" name="image" type="file" />
      </div>
      <SubmitButton className="" title={"Creating"}>
        Create Blog
      </SubmitButton>
    </form>
  );
}
