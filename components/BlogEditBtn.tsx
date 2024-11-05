"use client";

import React from "react";
import { IconEdit } from "@tabler/icons-react";
import { Blog } from "@prisma/client";

import BlogEditForm from "./BlogEditForm";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  blog: Blog;
};

const BlogEditBtn = ({ blog }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <IconEdit className="cursor-pointer" color="blue" />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Edit this blog</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)] pr-4">
          <DialogDescription className="pt-2">
            <BlogEditForm blog={blog} />
          </DialogDescription>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BlogEditBtn;
