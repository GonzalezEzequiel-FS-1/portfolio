import { Divider, Text, Group } from "@mantine/core";
import React from "react";
import background from "../../public/Imgs/background.jpg";

const MainPost = () => {
  return (
    <section className="transition-all duration-500 ease-in-out w-screen lg:h-screen px-10 lg:mx-6 bg-slate-900/40 rounded-xl p-6 text-white shadow-lg z-10 overflow-y-auto">
      {/* Blog Title */}
      <Text
        size="3rem"
        fw={900}
        variant="gradient"
        gradient={{ from: "violet", to: "blue", deg: 110 }}
        styles={{
          root: {
            padding: "0 0 1rem 0",
          },
        }}
      >
        Building Modern Web Apps with React
      </Text>

      {/* Date */}
      <Group className="mt-2 text-sm text-gray-300">
        <Text>Published:</Text>
        <Text>Sun. Sept 7 2025</Text>
        <Text>| Author: Ezequiel Gonzalez</Text>
      </Group>

      <Divider className="my-4" />

      {/* Featured Image */}
      <div className="w-full h-80 bg-blue-700 flex items-center justify-center mt-6 shadow-2xl rounded-lg z-10">
        <img
          src="/Imgs/background.jpg"
          alt="Featured Project Screenshot"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Divider className="my-6" />

      {/* Intro */}
      <Text className="mt-4 text-lg">
        Welcome to my portfolio blog! Today, I want to share practical tips and
        insights about building modern web applications using React, Tailwind
        CSS, and Mantine. We’ll cover responsive design, animations, reusable
        components, and even some subtle effects like floating fireflies in the
        background.
      </Text>

      <Text className="mt-4 text-lg">
        Whether you’re a beginner or an experienced developer, the techniques
        demonstrated here can help you create polished, professional-looking
        applications quickly.
      </Text>

      {/* Section: Responsive Design */}
      <Text className="mt-6 text-2xl font-semibold">
        Why Responsive Design Matters
      </Text>
      <Text className="mt-2 text-lg">
        Modern users access websites on desktops, tablets, and smartphones. A
        responsive layout ensures your app looks great and functions properly on
        all devices. Tailwind CSS makes building responsive layouts
        straightforward using its mobile-first breakpoint system.
      </Text>
      <Text className="mt-2 text-lg italic text-gray-300">
        “A responsive site is a usable site on any device.” — Web Design Best
        Practices
      </Text>

      {/* Section: Animations */}
      <Text className="mt-6 text-2xl font-semibold">Adding Animations</Text>
      <Text className="mt-2 text-lg">
        Animations make your web app feel alive. Using libraries like Framer
        Motion, you can create smooth transitions, hover effects, and even
        subtle background animations like floating fireflies or fading cards.
      </Text>

      <Text className="mt-2 text-lg">
        Example: a card that fades in as you scroll.
      </Text>

      {/* Code Example */}
      <Text className="mt-4 text-lg bg-slate-800 p-4 rounded-lg font-mono">
        {`import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello World!
</motion.div>`}
      </Text>

      {/* Section: Reusable Components */}
      <Text className="mt-6 text-2xl font-semibold">Reusable Components</Text>
      <Text className="mt-2 text-lg">
        Breaking your UI into small, reusable components saves time and reduces
        bugs. For instance, a card component or a button with consistent styles
        can be reused across your app. Pass props to make them flexible and
        maintainable.
      </Text>

      <ul className="list-disc list-inside mt-2 text-lg">
        <li>Break UI into independent components</li>
        <li>Pass props to make components configurable</li>
        <li>
          Use hooks for shared logic like fetching data or scroll tracking
        </li>
        <li>Maintain consistent styling with Tailwind or Mantine variants</li>
      </ul>

      {/* Section: Fireflies Effect */}
      <Text className="mt-6 text-2xl font-semibold">Subtle UI Effects</Text>
      <Text className="mt-2 text-lg">
        Adding subtle effects like floating fireflies in the background creates
        a modern, polished feel. It’s important not to overdo it—effects should
        enhance the user experience, not distract from content.
      </Text>

      {/* Conclusion */}
      <Text className="mt-6 text-2xl font-semibold">Conclusion</Text>
      <Text className="mt-2 text-lg">
        Combining React, Tailwind, Mantine, and Framer Motion allows developers
        to build responsive, interactive, and visually appealing web apps
        quickly. By using reusable components, animations, and subtle effects,
        your apps will feel professional and polished.
      </Text>

      <Text className="mt-4 text-lg">
        This blog post highlights the techniques I use in my projects. Stay
        tuned for more tutorials and insights about modern web development.
      </Text>
    </section>
  );
};

export default MainPost;
