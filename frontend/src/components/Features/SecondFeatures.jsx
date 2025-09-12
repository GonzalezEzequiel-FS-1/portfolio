import React from "react";
import { Text } from "@mantine/core";

const features = [
  {
    title: "Scalable Architectures",
    sub: "Future-ready systems designed to handle growth without compromising performance or user experience.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Interactive Interfaces",
    sub: "Dynamic, responsive designs that feel natural and intuitive across all devices.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "API Development",
    sub: "Robust backend solutions with clean, well-documented APIs that power seamless integrations.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Accessibility First",
    sub: "Inclusive design practices that ensure every user can access and enjoy your application.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Cloud & Deployment",
    sub: "Efficient CI/CD pipelines and cloud-based deployments for reliable, scalable delivery.",
    gradient: "from-sky-500 to-indigo-700",
  },
  {
    title: "Passion Projects",
    sub: "Creative experiments and personal builds that showcase innovation, curiosity, and love for the craft.",
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
          Designing With Purpose,
        </Text>
        <Text
          styles={{ root: { textAlign: "center", paddingBottom: "1rem" } }}
          size="2.5rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 202 }}
        >
          Building With You
        </Text>
        <Text variant="dimmed" className="text-lg leading-relaxed">
          Great digital experiences start with collaboration. We work closely
          with you to uncover your goals, define clear strategies, and build
          solutions that truly align with your vision. Our process emphasizes
          transparency, adaptability, and continuous improvement—ensuring every
          project not only meets expectations but exceeds them. Together, we
          create technology that drives success and lasting connections.
        </Text>
      </div>

      {/* Horizontal Scroll Cards */}
      <section className="flex overflow-x-auto overflow-y-clip gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-center bg-gradient-to-br ${feature.gradient} rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform`}
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
