"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

import { PlusIcon } from "./ui/PlusIcon";
import BlogForm from "./BlogForm";

const AddBlogBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      {" "}
      <Button
        className="bg-foreground text-background my-4"
        endContent={<PlusIcon />}
        size="sm"
        onPress={onOpen}
      >
        Add New Blog
      </Button>
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
                Create Program
              </ModalHeader>
              <ModalBody>
                <BlogForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddBlogBtn;