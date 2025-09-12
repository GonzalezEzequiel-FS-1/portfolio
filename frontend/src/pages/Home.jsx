import React, { forwardRef, useEffect } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/footer/Footer";
import Features from "../components/Features/Features";
import TechShuffle from "../components/carousel/CarouselComponent.jsx";
import Specializations from "../components/AboutMe/Specializations.jsx";
import SecondFeatures from "../components/Features/SecondFeatures.jsx";

const Home = forwardRef(({ onScrollChange }, ref) => {
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

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start w-screen scroll-smooth"
    >
      <Hero />

      <section
        id="featuresOne"
        className="w-screen flex items-center justify-center"
      >
        <Features />
      </section>

      <section className="w-screen  flex-col flex items-center justify-center overflow-x-hidden">
        <SecondFeatures />
      </section>
      <section className="flex justify-center px-0 lg:px-20 xl:px-36 2xl:px-60">
        <Specializations />
      </section>

      <section
        id="carrousel"
        className="scroll-smooth w-screen flex flex-col items-center justify-around"
      >
        <TechShuffle />
      </section>
      <section
        id="about"
        className="w-screen flex items-center justify-center scroll-smooth"
      >
        <AboutMe />
      </section>

      <section
        id="contact"
        className="w-screen flex flex-col items-center justify-around"
      >
        <ContactForm />
      </section>
    </div>
  );
});

export default Home;
