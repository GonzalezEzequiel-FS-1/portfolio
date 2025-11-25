import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SitePreviewModal from "../modal/SitePreviewModal";
import { useDisclosure } from "@mantine/hooks";

// Slide animations for scroll
const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function PreviewCard({
  index,
  title,
  description, // short description for card
  longDescription, // long description for modal
  url,
  previewImage,
  services = [],
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
  const [isHovered, setHovered] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <motion.div
      ref={ref}
      variants={slideVariants[index % 2 === 0 ? "left" : "right"]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer relative"
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Phone / Device */}
        <motion.div
          className="relative w-full lg:w-1/2 z-20 max-w-[300px] md:max-w-none mx-auto"
          animate={{
            scale: isHovered ? 1.05 : 1,
            zIndex: isHovered ? 50 : 20,
            x: isHovered ? 0 : 0,
            y: isHovered ? -5 : 0,
          }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={open}
        >
          <img
            src="/Imgs/iphoneFrame.png"
            alt="iPhone frame"
            className="relative w-full h-auto drop-shadow-2xl pointer-events-none select-none"
            draggable={false}
          />

          <div className="absolute inset-0 top-[2%] bottom-[2%] left-[50%] -translate-x-1/2 w-[92%] rounded-[2.5rem] overflow-hidden">
            <img
              src={previewImage}
              alt={`${title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              draggable={false}
            />

            <SitePreviewModal
              opened={opened}
              onClose={close}
              siteTitle={title}
              url={url}
              title={title}
              description={longDescription}
              services={services}
            />
          </div>

          <motion.div
            animate={{
              boxShadow: isHovered
                ? "0 40px 80px rgba(139, 92, 246, 0.5)"
                : "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
            className="absolute inset-0 -z-10 rounded-3xl blur-3xl"
          />
        </motion.div>

        {/* Text / Info */}
        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col justify-around gap-4 z-10"
          animate={{
            scale: isHovered ? 0.95 : 1,
            opacity: isHovered ? 0.6 : 1,
            x: isHovered ? -10 : 0,
            y: isHovered ? 10 : 0,
            zIndex: isHovered ? 10 : 10,
          }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl text-center font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>

          <p className="text-gray-700 text-center mt-2 dark:text-gray-300 text-sm md:text-base">
            {description}
          </p>

          {services.length > 0 && (
            <div className="flex flex-col items-center justify-between">
              <h4 className="mt-2 text-center font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Services provided:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm md:text-base space-y-1">
                {services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="mt-4 text-center font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition transform">
            Click for a Preview
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
