import { Text } from "@mantine/core";
import React from "react";

const FeatureCard = ({
  titleOne,
  subOne,
  titleTwo,
  subTwo,
  titleThree,
  subThree,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 py-10 px-4">
      {/* Text Block */}
      <div className="md:w-1/3 w-full text-justify  rounded-3xl p-6">
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
          What I Bring to the Table
        </Text>
        <Text variant="dimmed">
          With a Doctorate in Medicine and a bachelors in Full-Stack Web design
          and Development, I bring a unique combination of analytical thinking,
          precision, and problem-solving skills. I excel at translating complex
          requirements into intuitive, reliable web solutions, while maintaining
          attention to detail and delivering scalable, user-focused experiences.
          My multidisciplinary background allows me to approach challenges
          creatively and provide solutions that are both innovative and
          practical.
        </Text>
      </div>

      {/* Cards Block */}
      <section className="md:w-2/3 flex flex-wrap gap-6 bg-yellow-400">
        <div className="flex-1 sm:min-h-[380] md:w-[420] bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl shadow-lg flex flex-col  text-center items-center justify-center text-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">{titleOne}</h2>
          <p className="text-center">{subOne}</p>
        </div>

        <div className="flex-1 sm:min-h-[380] md:w-[420] bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl shadow-lg flex flex-col text-center  items-center justify-center text-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">{titleTwo}</h2>
          <p className="text-center">{subTwo}</p>
        </div>

        <div className="flex-1 sm:min-h-[380] md:w-[420] bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl shadow-lg flex flex-col text-center  items-center justify-center text-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">{titleThree}</h2>
          <p className="text-center">{subThree}</p>
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;
