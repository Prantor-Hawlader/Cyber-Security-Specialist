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
import { ContactForm } from "./ui/contact-form";
import { IconAddressBook } from "@tabler/icons-react";

const ContactBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      {" "}
      <Button
        className="bg-foreground text-background my-4"
        endContent={<IconAddressBook />}
        size="sm"
        onPress={onOpen}
      >
        Contact Me
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
              <ModalHeader className="flex flex-col justify-start gap-1">
                Contact
              </ModalHeader>
              <ModalBody>
                <ContactForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactBtn;
