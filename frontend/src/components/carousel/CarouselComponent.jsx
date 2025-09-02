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

const technologies = [
  { name: "React", icon: <SiReact size={64} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={64} color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript size={64} color="#F7DF1E" /> },
  { name: "Node.js", icon: <SiNodedotjs size={64} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={64} color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb size={64} color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={64} color="#336791" /> },
  { name: "Docker", icon: <SiDocker size={64} color="#2496ED" /> },
  { name: "GitHub", icon: <SiGithub size={64} color="#777777" /> },
  { name: "Framer Motion", icon: <SiFramer size={64} color="#0055FF" /> },
];

export default function TechFader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 min-h-[200px]">
      <h2 className="text-4xl text-white font-tomorrow font-bold mb-8">Tools and Technologies</h2>
      <div className="relative w-40 h-40 flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            key={technologies[currentIndex].name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="absolute flex flex-col items-center justify-center"
          >
            {technologies[currentIndex].icon}
            <span className="text-stone-200 font-medium mt-2 text-lg">
              {technologies[currentIndex].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
