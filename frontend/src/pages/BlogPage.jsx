import React from "react";
import FirefliesBackground from "../components/FirefliesBackground";
import MainPost from "../PostSection/MainPost";
import PostSection from "../PostSection/PostSection";

const BlogPage = () => {
  return (
    <section className="relative w-screen min-h-screen px-10 pt-16 pb-10 flex lg:flex-row md:flex-col md:items-center gap-5 justify-between overflow-hidden">
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
