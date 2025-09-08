import { Text } from "@mantine/core";
import React from "react";

const PostSection = () => {
  const posts = [
    "Deploying a Full-Stack React App with Firebase Hosting",
    "Using Mantine UI for Rapid React Prototyping",
    "Custom Animations in React with Framer Motion",
  ];

  return (
    <section className="h-screen w-screen lg:w-3/6 bg-slate-900/40 p-6 text-white rounded-2xl shadow-xl z-10 overflow-y-auto flex flex-col">
      {/* Section Title */}
      <h1 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
        Recent Posts
      </h1>

      {/* Post Items */}
      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="w-full p-4 h-28 bg-slate-700 rounded-xl flex items-center justify-start shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
          >
            <Text className="text-lg font-medium text-white">{post}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostSection;
