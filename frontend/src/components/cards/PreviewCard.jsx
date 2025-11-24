import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  description,
  url,
  previewImage,
  services = [], // New field for services offered
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      variants={slideVariants[index % 2 === 0 ? "left" : "right"]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.9, ease: "easeOut" }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className=""
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -12, scale: 1.03 }}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Preview Frame */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/Imgs/iphoneFrame.png"
            alt="iPhone frame"
            className="relative z-10 w-full h-auto drop-shadow-2xl pointer-events-none select-none"
            draggable={false}
          />

          {/* Screen inside frame */}
          <div className="absolute inset-0 top-[2%] bottom-[2%] left-[50%] -translate-x-1/2 w-[92%] rounded-[2.5rem] overflow-hidden">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              src={previewImage}
              alt={`${title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />

            {isHovered && (
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={url}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                title={title}
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            )}
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: isHovered
                ? "0 40px 80px rgba(139, 92, 246, 0.5)"
                : "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
            className="absolute inset-0 -z-10 rounded-3xl blur-3xl"
          />
        </div>

        {/* Description & Services */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            {description}
          </p>

          {services.length > 0 && (
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Services provided:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
              <p className="text-center font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Interact with the preview or click here to visit site
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
