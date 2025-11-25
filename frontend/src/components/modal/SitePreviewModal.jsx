import React from "react";
import { Modal } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

const SitePreviewModal = ({
  opened,
  onClose,
  url,
  siteTitle,
  title,
  description,
  services = [],
}) => {
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const iframeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      overlayProps={{ backgroundOpacity: 0.55, blur: 50 }}
      withCloseButton={false}
      size="xl"
      styles={{
        content: {
          backgroundColor: "#FFFFFF00",
          padding: 0,
          borderRadius: "1rem",
        },
      }}
    >
      <AnimatePresence>
        {opened && (
          <motion.div
            className="relative flex flex-col md:flex-row bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 text-white transition"
              title="Close Preview"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWindowClose size={20} />
            </motion.button>

            {/* Iframe */}
            <motion.div
              className="w-full md:w-1/2 p-4 flex justify-center items-center"
              variants={iframeVariants}
              transition={{ duration: 0.5 }}
            >
              <iframe
                title={siteTitle}
                src={url}
                className="w-full h-[60vh] md:h-[80vh] max-h-[667px] max-w-[375px] rounded-2xl shadow-2xl shadow-black/25 border border-gray-300/10"
              />
            </motion.div>

            {/* Info Panel */}
            <motion.div
              className="w-full md:w-1/2 p-6 flex flex-col justify-between"
              variants={panelVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {title}
                </h3>
              </div>

              <div className="flex-1 flex items-start justify-center mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
                  {description}
                </p>
              </div>

              {services.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Services provided:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm md:text-base space-y-1">
                    {services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition transform"
              >
                Visit Site
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default SitePreviewModal;
