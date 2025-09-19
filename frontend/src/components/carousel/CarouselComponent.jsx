import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMantine,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiFramer,
  SiArduino,
} from "react-icons/si";
import { Divider, Text } from "@mantine/core";

const technologies = [
  { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} color="#339933" /> },
  { name: "Mantine UI", icon: <SiMantine size={48} color="#00aeff" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
  { name: "Arduino", icon: <SiArduino size={48} color="#00979C" /> },
  { name: "Docker", icon: <SiDocker size={48} color="#2496ED" /> },
  { name: "GitHub", icon: <SiGithub size={48} color="#777777" /> },
  { name: "Framer Motion", icon: <SiFramer size={48} color="#0055FF" /> },
];

export default function TechShuffle() {
  const [shuffledTechs, setShuffledTechs] = useState(technologies);

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledTechs((prev) => shuffleArray(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" md:w-screen w-2/4 flex flex-col items-center justify-center max-w-2xl">
      <div className="text-center flex flex-col items-center justify-center">
        <Text
          styles={{
            root: {
              padding: "0rem 0rem 4rem 0rem",
            },
          }}
          size="3rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 202 }}
        >
          Tools and Technologies
        </Text>
        <div className="flex flex-wrap justify-center gap-8 w-screen">
          <AnimatePresence>
            {shuffledTechs.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center justify-center w-20"
              >
                {tech.icon}
                <span className="text-stone-200 font-medium mt-2 text-center text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
