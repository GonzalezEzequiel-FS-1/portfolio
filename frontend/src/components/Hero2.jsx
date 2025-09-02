import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NUM_FIREFLIES = 30;
const CURSOR_FIREFLIES = 5;

export default function Hero() {
  const [spawnCursorFireflies, setSpawnCursorFireflies] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEnter = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setSpawnCursorFireflies(true);
    };
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => window.removeEventListener("mouseenter", handleMouseEnter);
  }, []);

  const fireflies = Array.from({ length: NUM_FIREFLIES });
  const cursorFireflies = Array.from({ length: CURSOR_FIREFLIES });

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Fireflies */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {fireflies.map((_, i) => {
          const size = Math.random() * 4 + 2;
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          const endX = startX + (Math.random() * 200 - 100);
          const endY = startY + (Math.random() * 200 - 100);
          const duration = Math.random() * 6 + 4;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={`f-${i}`}
              initial={{ x: startX, y: startY, opacity: 0 }}
              animate={{
                x: [startX, endX, startX],
                y: [startY, endY, startY],
                opacity: [0, 0.8, 0],
                scale: [0.75, 0.5, 0.75],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: `rgba(255,255,${200 + Math.random() * 50},${0.6 + Math.random() * 0.2})`,
                position: "absolute",
                boxShadow: "0 0 8px 2px rgba(255,255,220,0.5)",
              }}
            />
          );
        })}

        {/* Cursor-triggered Fireflies */}
        {spawnCursorFireflies &&
          cursorFireflies.map((_, i) => {
            const size = Math.random() * 4 + 2;
            const offsetX = Math.random() * 60 - 30;
            const offsetY = Math.random() * 60 - 30;
            const duration = 2 + Math.random() * 3; // linger 2-5s

            return (
              <motion.div
                key={`c-${i}`}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: [cursorPos.x, cursorPos.x + offsetX, cursorPos.x + offsetX / 2],
                  y: [cursorPos.y, cursorPos.y + offsetY, cursorPos.y + offsetY / 2],
                  opacity: [0, 1, 0],
                  scale: [0.5, 0.75, 0.5],
                }}
                transition={{
                  duration,
                  ease: "easeInOut",
                }}
                style={{
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  backgroundColor: `rgba(255,255,${200 + Math.random() * 50},${0.7 + Math.random() * 0.3})`,
                  position: "absolute",
                  boxShadow: "0 0 10px 3px rgba(255,255,220,0.6)",
                }}
              />
            );
          })}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center gap-6 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-7xl md:text-8xl font-black text-stone-200 font-tomorrow text-glow"
        >
          EG<span className="text-indigo-400">Web</span>Dev
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-stone-400 font-average mt-2 max-w-xl"
        >
          Practical Web Solutions, Powerful Results
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex gap-6 mt-6"
        >
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-transform">
            See my Work
          </Button>
          <Button className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-transform">
            Contact me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
