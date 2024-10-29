"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { IconEdit } from "@tabler/icons-react";
import { Blog } from "@prisma/client";
import BlogEditForm from "./BlogEditForm";

type Props = {
  blog: Blog;
};
const BlogEditBtn = ({ blog }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <IconEdit className="cursor-pointer" color="blue" onClick={onOpen} />
      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Blog
              </ModalHeader>
              <ModalBody>
                <BlogEditForm blog={blog} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogEditBtn;
