import { Text } from "@mantine/core";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const SecondFeatureCard = ({
  titleOne,
  subOne,
  titleTwo,
  subTwo,
  titleThree,
  subThree,
}) => {
  return (
    <div className="flex text-center flex-col md:flex-row items-center  justify-between max-w-6xl mx-auto gap-10 py-10">
      {/* Cards Block */}
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0, x: -100 }} // start off-screen right
          whileInView={{ opacity: 1, x: 0 }} // fade in + slide in
          exit={{ opacity: 0, x: -100 }} // fade out + slide right
          transition={{ duration: 1.2, ease: "easeOut" }}
          yoyo:Infinity
          viewport={{ once: false, amount: 0.3 }} // triggers on enter AND exit
          className="md:w-2/3 w-full flex flex-wrap gap-6"
        >
          <div className="flex-1 min-h-[40px]  bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-2">{titleOne}</h2>
            <p className="text-center">{subOne}</p>
          </div>

          <div className="flex-1 min-w-[150px] min-h-[40px] bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-2">{titleTwo}</h2>
            <p className="text-center">{subTwo}</p>
          </div>

          <div className="flex-1 min-w-[280px] min-h-[40px]  bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-2">{titleThree}</h2>
            <p className="text-center">{subThree}</p>
          </div>
        </motion.section>

        {/* Text Block */}

        <div className="md:w-3/5 w-full rounded-3xl text-justify">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            yoyo:Infinity
            viewport={{ once: false, amount: 0.3 }}
          >
            <Text
              styles={{
                root: {
                  textAlign: "center",
                  paddingBottom: "1rem",
                },
              }}
              size={"3rem"}
              fw={900}
              variant="gradient"
              gradient={{ from: "violet", to: "blue", deg: 202 }}
            >
              Building Exceptional Web Experiences
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }} // start off-screen right
            whileInView={{ opacity: 1, y: 0 }} // fade in + slide in
            exit={{ opacity: 0, y: 100 }} // fade out + slide right
            transition={{ duration: 1.2, ease: "easeOut" }}
            yoyo:Infinity
            viewport={{ once: false, amount: 0.3 }} // triggers on enter AND exit
            className="max-w-xl m-auto"
          >

            <Text c="dimmed" ta={"justify"} className="text-lg leading-relaxed">
              We create high-quality web solutions that combine design,
              performance, and usability. From custom web applications to
              responsive interfaces, every project is crafted with precision and
              care to deliver an exceptional user experience. Our approach
              balances functionality with aesthetics, ensuring your website or
              application not only works flawlessly but also captivates your
              audience. We believe in scalable, maintainable solutions that grow
              with your business while keeping your users engaged and satisfied.
            </Text>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SecondFeatureCard;
