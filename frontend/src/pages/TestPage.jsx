import React from "react";
import SitePreviewModal from "../components/modal/SitePreviewModal";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";

const TestPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <SitePreviewModal
        opened={opened}
        onClose={close}
        siteTitle={"Testing"}
        url={"https://www.egwebdev.com/showcase/dealer"}
      />
      <Button onClick={open}>Hello</Button>
    </div>
  );
};

export default TestPage;
