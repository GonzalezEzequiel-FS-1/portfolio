import { Modal } from "@mantine/core";
import React from "react";

export const PreviewModal = ({ opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Authentication">
      {/* Modal content */}
    </Modal>
  );
};
