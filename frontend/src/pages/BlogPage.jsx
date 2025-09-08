import { Divider, Group, Text } from "@mantine/core";
import React from "react";
import FirefliesBackground from "../components/FirefliesBackground";
import MainPost from "../PostSection/MainPost";

const BlogPage = () => {
  return (
    <section className="relative w-screen min-h-screen px-10 pt-16 pb-10 flex lg:flex-row md:flex-col md:items-center gap-5 justify-between overflow-hidden">
      {/* Fireflies background */}
      <FirefliesBackground />

      {/* Left Side */}
      <MainPost />
      {/* Right Side */}
      <section className="lg:h-screen w-1/3 bg-slate-900 p-4 text-white rounded-2xl shadow-lg z-10 overflow-y-auto">
        <h1 className="text-2xl font-semibold">Recent Posts:</h1>

        <div className="w-full h-32 bg-slate-700 mt-4 rounded-lg flex items-center justify-center shadow-md">
          <Text className="text-center px-2">
            Deploying a Full-Stack React App with Firebase Hosting
          </Text>
        </div>

        <div className="w-full h-32 bg-slate-700 mt-4 rounded-lg flex items-center justify-center shadow-md">
          <Text className="text-center px-2">
            Using Mantine UI for Rapid React Prototyping
          </Text>
        </div>

        <div className="w-full h-32 bg-slate-700 mt-4 rounded-lg flex items-center justify-center shadow-md">
          <Text className="text-center px-2">
            Custom Animations in React with Framer Motion
          </Text>
        </div>
      </section>
    </section>
  );
};

export default BlogPage;
