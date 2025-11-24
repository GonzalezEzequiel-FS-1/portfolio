import React, { forwardRef, useEffect } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/footer/Footer";
import Features from "../components/Features/Features";
import TechShuffle from "../components/carousel/CarouselComponent.jsx";
import SecondFeatures from "../components/Features/SecondFeatures.jsx";
import Specializations from "../components/Specialization/Specializations.jsx";
import PagePreviews from "../components/PagePreviews/PagePreviews.jsx"; // Perfect path
import { useLocation } from "react-router-dom";

const Home = forwardRef(({ onScrollChange }, ref) => {
  const location = useLocation();

  useEffect(() => {
    const scrollEl = ref?.current;
    if (!scrollEl) return;

    const handleScroll = (e) => {
      const y = e.target.scrollTop;
      if (onScrollChange) onScrollChange(y);
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, [ref, onScrollChange]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  // Dinamically set the document title (SEO Improvement)
  useEffect(() => {
    document.title = "EG Web Dev | Portfolio & Web Services";

    const descriptionContent =
      "EG Web Dev — Full-stack web development portfolio and services. Showcasing projects like Dealer Dashboard and AGPGraphx. Offering custom web apps, hosting, Firebase authentication, MongoDB database management, and client solutions.";

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
    <div
      ref={ref}
      className="flex flex-col items-center justify-start w-screen scroll-smooth overflow-x-hidden"
    >
      <Hero />

      <section className="w-full">
        <section
          id="featuresOne"
          className="w-full flex items-center justify-center"
        >
          <Features />
        </section>

        <section
          id="featuresTwo"
          className="w-full flex flex-col items-center justify-center overflow-hidden"
        >
          <SecondFeatures />
        </section>
      </section>

      <div className="w-full flex flex-col items-center">
        {/* Specializations */}
        <section className="w-full flex justify-center py-10 px-4 lg:px-20 xl:px-36 2xl:px-60">
          <Specializations />
        </section>

        {/* This is where your beautiful live preview shines */}
        <section className="w-full py-20 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-purple-900/10">
          <PagePreviews />
        </section>

        {/* Tech Carousel */}
        <section
          id="carrousel"
          className="w-full flex flex-col items-center py-10"
        >
          <TechShuffle />
        </section>
      </div>

      <Footer />
    </div>
  );
});

Home.displayName = "Home";
export default Home;
