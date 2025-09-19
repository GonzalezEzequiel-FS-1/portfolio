import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import ContactForm from "../forms/ContactForm";
import ContactMe from "../ContactMe";
import FormGreeting from "../forms/FormGreeting";
const FormModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        withCloseButton={false}
        size="auto"
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.75,
          blur: 10,
        }}
        styles={{
          root: {
            backgroundColor: "red",
            borderRadius: "20rem",
          },
        }}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="sr-only md:not-sr-only w-1/2">
            <FormGreeting />
          </div>

          <div className="w-full md:w-1/2">
            <ContactMe />
          </div>
        </div>
      </Modal>
      <Button onClick={open}>Contact Me</Button>
    </>
  );
};

export default FormModal;
