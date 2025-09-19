import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import FeatureCard from "../cards/FeatureCard";
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

export default function ScrollFadeSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <div
      className="w-screen flex flex-col items-center justify-center gap-16 py-20"
      ref={containerRef}
    >
      <div className="relative w-full max-w-6xl flex items-start justify-center min-h-[500px]">
        {/* First FeatureCard Set */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isInView ? 0 : 1, y: isInView ? -50 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full"
        >
          <FeatureCard
            titleOne="Custom Web Solutions"
            subOne="Tailored applications that solve real problems."
            titleTwo="UI / UX Design"
            subTwo="Clean, modern, and intuitive designs."
            titleThree="Performance & Optimization"
            subThree="Fast, reliable, and optimized solutions."
          />
        </motion.div>

        {/* Second FeatureCard Set (Inverted) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="absolute w-full"
        >
          <FeatureCard
            titleOne="Momentum App"
            subOne="A productivity app for ADHD, combining task organization and gamification."
            titleTwo="EG WebDev Portfolio"
            subTwo="Showcase of high-end projects with responsive design and animations."
            titleThree="Coming Soon"
            subThree="Future projects with cutting-edge designs will appear here."
          />
        </motion.div>

        {/* Tech Fader as additional layer (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1.2 }}
          className="absolute flex flex-col items-center justify-center w-full mt-20"
        >
          <h2 className="text-4xl text-white font-bold mb-8 font-tomorrow">
            Tools and Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-32"
              >
                {tech.icon}
                <span className="text-stone-200 font-medium mt-2 text-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
