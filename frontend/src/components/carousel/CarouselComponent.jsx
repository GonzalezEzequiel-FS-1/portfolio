import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiFramer,
} from "react-icons/si";
import { Divider, Text } from "@mantine/core";

const technologies = [
  { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={48} color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} color="#336791" /> },
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
    <div className=" w-screen h-screen pt-32 flex flex-col items-center justify-center gap-32 py-10">
      <div className="text-center">
      <h2 className="text-4xl text-white font-bold mb-8 font-tomorrow">
        Tools and Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-8 relative w-full max-w-6xl">
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
      <div className="w-2/4 flex flex-col justify-around items-center text-center gap-1">
        <Text
          styles={{
            root:{
              padding:'0rem 0rem 1rem 0rem'
            }
          }}
          size="3rem"
          fw={900}
          variant="gradient"
          gradient={{ from: 'violet', to: 'blue', deg: 202 }}
        >
          What I Love doing?
        </Text>
        <Text
          size="2rem"
        >I specialize in modern web development, leveraging a diverse set of tools and technologies to build fast, scalable, and visually engaging applications. From frontend frameworks to backend solutions, I craft end-to-end experiences that meet both user and business needs.</Text>
      </div>
    </div>
  );
}
