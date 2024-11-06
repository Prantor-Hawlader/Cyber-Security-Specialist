"use client";

import React from "react";

import { PlusIcon } from "./ui/PlusIcon";
import BlogForm from "./BlogForm";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddBlogBtn = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-md p-2 flex justify-center items-center bg-foreground text-background my-4">
        <span className="font-mono text-sm text-center">Add New Blog</span>
        <PlusIcon />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Edit this blog</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)] pr-4">
          <DialogDescription className="pt-2">
            <BlogForm />
          </DialogDescription>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogBtn;
