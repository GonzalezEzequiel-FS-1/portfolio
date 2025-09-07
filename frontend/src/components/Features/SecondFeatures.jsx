import React from "react";
import { Text } from "@mantine/core";

const features = [
  {
    title: "Custom Web Solutions",
    sub: "Tailored applications that solve real problems for your business or personal projects.",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "UI / UX Design",
    sub: "Clean, modern, and intuitive designs that engage users and improve experiences.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Performance & Optimization",
    sub: "Fast, reliable, and optimized solutions for maximum efficiency and scalability.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Momentum App",
    sub: "A productivity app for ADHD, combining task organization and gamification.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "EG WebDev Portfolio",
    sub: "A showcase of high-end web development projects with professional animations and responsive design.",
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    title: "Coming Soon",
    sub: "Placeholder for future projects or client work with cutting-edge design",
    gradient: "from-gray-500 to-stone-700",
  },
];

const SecondFeatures = () => {
  return (
    <div className="w-full px-4 py-12 md:py-20 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Text Block */}
      <div className="w-full max-w-3xl mx-auto text-center px-4">
        <Text
          styles={{ root: { textAlign: "center", paddingBottom: "1rem" } }}
          size="2.5rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 202 }}
        >
          Building Exceptional Web Experiences
        </Text>
        <Text variant="dimmed" className="text-lg leading-relaxed">
          We create high-quality web solutions that combine design, performance,
          and usability. From custom web applications to responsive interfaces,
          every project is crafted with precision and care to deliver an
          exceptional user experience. Our approach balances functionality with
          aesthetics, ensuring your website or application not only works
          flawlessly but also captivates your audience. We believe in scalable,
          maintainable solutions that grow with your business while keeping your
          users engaged and satisfied.
        </Text>
      </div>

      {/* Horizontal Scroll Cards */}
      <section className="flex overflow-x-auto overflow-y-clip gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-center bg-gradient-to-br ${feature.gradient} rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform overflow-x-hidden`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              {feature.title}
            </h2>
            <p className="text-center text-sm sm:text-base">{feature.sub}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SecondFeatures;
