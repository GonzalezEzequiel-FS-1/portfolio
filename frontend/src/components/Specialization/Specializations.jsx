import { Text } from "@mantine/core";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
const Specializations = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "none" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      className=" flex flex-col justify-around items-center gap-1 mt-10 text-center"
    >
      <Text
        styles={{
          root: {
            padding: "0rem 0rem 1rem 0rem",
            textAlign: "center",
          },
        }}
        size="3rem"
        fw={900}
        variant="gradient"
        gradient={{ from: "violet", to: "blue", deg: 202 }}
      >
        What I Love doing?
      </Text>
      <div className="m-auto max-w-xl mx-4">
        <Text ta="justify" c="dimmed" size={{ base: "2xl", sm: "sm" }}>
          I specialize in modern web development, leveraging a diverse set of
          tools and technologies to build fast, scalable, and visually engaging
          applications. From frontend frameworks to backend solutions, I craft
          end-to-end experiences that meet both user and business needs.
        </Text>
      </div>
    </motion.div>
  );
};

export default Specializations;
