import { Text, Container, Button } from "@mantine/core";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";

// Slide data
const slides = [
  {
    title: "The Story So Far",
    subtitle:
      "I’m Zeke Gonzalez, a paramedic, web developer, and lifelong problem solver. My journey into technology didn’t start behind a keyboard—it began in the field, navigating high-stakes situations where precision and calm were crucial. These experiences shaped my approach to problem-solving in code.",
  },
  {
    title: "From Care to Code",
    subtitle:
      "Transitioning from medicine to web development allowed me to channel analytical thinking and attention to detail into building tools that improve lives. After earning my Bachelor’s in Web Development from Full Sail University, I dove deep into the MERN stack, React, and Docker, creating applications that blend functionality with elegant user experience.",
  },
  {
    title: "Tinkerer at Heart",
    subtitle:
      "I love understanding how things work. From 3D printing custom keyboards to experimenting with firmware like ZMK, I approach web development the same way: hands-on, iterative, and creative. I enjoy solving complex problems with innovative, practical solutions.",
  },
  {
    title: "Problem-Solving Style",
    subtitle:
      "I combine empathy, precision, and curiosity in every project. Whether debugging a tricky piece of code, mentoring a teammate, or designing a user interface, I focus on clarity, efficiency, and the end-user experience. My background in medicine taught me to assess situations carefully and act decisively.",
  },
  {
    title: "Let’s Build Something Cool",
    subtitle:
      "Collaboration is key. I thrive in teams where communication, creativity, and technical skill intersect. Outside of work, I’m a lifelong learner who enjoys sharing knowledge, experimenting with new technologies, and turning ideas into impactful projects.",
  },
];

// Step tracker component
const HighlightedRepeat = ({
  total,
  highlightIndex,
  Icon = FaDotCircle,
  HighlightIcon = FaRegDotCircle,
  size = 24,
}) => (
  <div style={{ display: "flex", gap: "0.25rem" }}>
    {Array.from({ length: total }).map((_, i) => {
      const IconComponent = i === highlightIndex ? HighlightIcon : Icon;
      return (
        <motion.div
          key={i}
          animate={{ scale: i === highlightIndex ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent
            size={size}
            color={i === highlightIndex ? "gold" : "gray"}
          />
        </motion.div>
      );
    })}
  </div>
);

const AboutMeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="h-full w-full max-w-3xl flex flex-col items-center gap-6 pt-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) handleNext();
            if (info.offset.x > 50) handlePrev();
          }}
          className="w-full max-w-3xl  h-full flex flex-col items-center md:items-start px-6"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-15 w-full"
          >
            <Text
              size="2rem"
              ta="center"
              pb="sm"
              fw={900}
              variant="gradient"
              gradient={{ from: "violet", to: "blue", deg: 202 }}
            >
              {slides[currentIndex].title}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="overflow-auto h-40"
          >
            <Text
              size="md"
              styles={{
                root: {
                  textAlign: "justify",
                },
              }}
            >
              {slides[currentIndex].subtitle}
            </Text>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Step tracker */}
      <section className="w-full flex items-start justify-center">
        <HighlightedRepeat
          total={slides.length}
          highlightIndex={currentIndex}
          Icon={FaDotCircle}
          HighlightIcon={FaRegDotCircle}
          size={12}
        />
      </section>

      {/* Buttons */}
      <div className="flex gap-4 w-full  justify-center">
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button color="violet" variant="outline" onClick={handlePrev}>
            ← Back a Step
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <Button
            color="blue"
            variant="gradient"
            gradient={{ from: "violet", to: "blue" }}
            onClick={handleNext}
          >
            Next Chapter →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeCarousel;
