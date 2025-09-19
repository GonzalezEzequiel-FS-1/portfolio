import { Anchor, Button } from "@mantine/core";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import FirefliesBackground from "./FirefliesBackground";
import { useState, useEffect } from "react";
import FormModal from "./modal/FormModal";

export default function Hero() {
  const items = [
    {
      text: "Download My Resume",
      link: "/Docs/EzequielGonzalezResume2025.pdf",
    },
    { text: "Read my blog", link: "/blogs" },
    { text: "Learn more about me", link: "/about" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for sliding text
  const slideVariants = {
    enter: { x: 50, opacity: 0, filter: "blur(6px)" },
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, type: "spring", stiffness: 120 },
    },
    exit: {
      x: -50,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <FirefliesBackground />

      <div className="transition-all duration-150 ease-in-out relative z-10 flex flex-col items-center text-center gap-2 sm:gap-6 mt-6 sm:mt-4">
        <motion.h1
          initial={{ filter: "blur(12px)", scale: 0.95 }}
          animate={{ filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="transition-all duration-200 ease-in-out text-6xl md:text-8xl font-black text-stone-200 font-tomorrow text-glow"
        >
          EG<span className="text-indigo-400">Web</span>Dev
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
          className="md:text-2xl text-stone-400 font-average mt-2 max-w-xl"
        >
          Practical Web Solutions, Powerful Results
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="flex gap-6 mt-6 flex-col items-center"
        >
          <div className="flex gap-3 flex-wrap justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/GonzalezEzequiel-FS-1",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full px-8 py-3 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            >
              See my Work
            </Button>

            {/* <Button
              onClick={() => {
                nav("/contact");
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-full px-8 py-3 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            >
              Contact Me
            </Button> */}
            <FormModal />
          </div>

          {/* Sliding Anchor Carousel */}
          <div className="relative h-10 flex items-center justify-center mt-3 w-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Anchor
                  href={items[currentIndex].link}
                  className="text-white underline font-semibold text-lg md:text-xl hover:text-indigo-400 hover:scale-105 transition-transform duration-300"
                >
                  {items[currentIndex].text}
                </Anchor>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
