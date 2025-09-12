import React from "react";
import FirefliesBackground from "../components/FirefliesBackground";
import MainPost from "../PostSection/MainPost";
import PostSection from "../PostSection/PostSection";

const BlogPage = () => {
  return (
    <section className="transition-all duration-75 ease-in-out relative w-screen min-h-screen px-10 pt-16 pb-10 flex flex-col lg:flex-row items-center gap-5 justify-between overflow-hidden">
      {/* Fireflies background */}
      <FirefliesBackground />

      {/* Left Side → Main Post */}
      <MainPost />

      {/* Right Side → Recent Posts Sidebar */}
      <PostSection />
    </section>
  );
};

export default BlogPage;
