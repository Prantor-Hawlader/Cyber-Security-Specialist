"use client";
import React from "react";
import toast from "react-hot-toast";
import { IconTrash } from "@tabler/icons-react";

import { deleteBlog } from "@/action/blog";
type Props = {
  blogId: string;
};
const DeleteButton = ({ blogId }: Props) => {
  const handleDelete = async () => {
    const res = await deleteBlog(blogId);

    if (res?.status === "success") {
      toast.success("Blog deleted successfully");
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  return (
    <IconTrash className="cursor-pointer" color="red" onClick={handleDelete} />
  );
};

export default DeleteButton;
