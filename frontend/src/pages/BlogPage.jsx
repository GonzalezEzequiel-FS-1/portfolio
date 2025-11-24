import React, { useEffect } from "react";
import FirefliesBackground from "../components/FirefliesBackground";
import MainPost from "../PostSection/MainPost";
import PostSection from "../PostSection/PostSection";

const BlogPage = () => {
  // Dinamically set the document title (SEO Improvement)
  useEffect(() => {
    document.title = "EG Web Dev | Blog Page";

    const descriptionContent =
      "EG Web Dev Blog — Tutorials, tips, and insights on full-stack web development with React, Next.js, Tailwind CSS, Firebase, and MongoDB.";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

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
