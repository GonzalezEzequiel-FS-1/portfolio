import { motion } from "framer-motion";
import { useMemo } from "react";

const NUM_FIREFLIES = 30;

export default function FirefliesBackground() {
  const fireflies = useMemo(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return Array.from({ length: NUM_FIREFLIES }).map(() => {
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const endX = startX + (Math.random() * 200 - 100);
      const endY = startY + (Math.random() * 200 - 100);
      const duration = Math.random() * 6 + 4;
      const delay = Math.random() * 5;
      const color = `rgba(255,255,${200 + Math.random() * 50},${
        0.6 + Math.random() * 0.2
      })`;

      return { size, startX, startY, endX, endY, duration, delay, color };
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
      {fireflies.map((f, i) => (
        <motion.div
          key={i}
          initial={{ x: f.startX, y: f.startY, opacity: 0 }}
          animate={{
            x: [f.startX, f.endX, f.startX],
            y: [f.startY, f.endY, f.startY],
            opacity: [0, 0.8, 0],
            scale: [0.75, 0.5, 0.75],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            width: f.size,
            height: f.size,
            borderRadius: "50%",
            backgroundColor: f.color,
            position: "absolute",
            boxShadow: "0 0 8px 2px rgba(255,255,220,0.5)",
          }}
        />
      ))}
    </div>
  );
}
