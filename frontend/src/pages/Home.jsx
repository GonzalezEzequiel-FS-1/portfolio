import React, { forwardRef, useContext, useEffect } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/footer/Footer";
import Features from "../components/Features/Features";
import TechShuffle from "../components/carousel/CarouselComponent.jsx";
import Specializations from "../components/AboutMe/Specializations.jsx";
import SecondFeatures from "../components/Features/SecondFeatures.jsx";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import { ThemeContext } from "../Theming/mantineColorScheme.jsx";

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

      <motion.section
        id="featuresOne"
        className="w-screen flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }} // start off-screen right
        whileInView={{ opacity: 1, x: 0 }} // fade in + slide in
        exit={{ opacity: 0, x: 100 }} // fade out + slide right
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // triggers on enter AND exit
      >
        <Features />
      </motion.section>

      <motion.section
        id="featuresTwo"
        className="w-screen flex-col flex items-center justify-center overflow-x-hidden"
        initial={{ opacity: 0, x: -100 }} // start off-screen left
        whileInView={{ opacity: 1, x: 0 }} // fade in + slide into place
        exit={{ opacity: 0, x: -100 }} // fade out + slide left
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // trigger on enter and exit
      >
        <SecondFeatures />
      </motion.section>

      <section className="flex justify-center mb-10 items-center px-0 lg:px-20 xl:px-36 2xl:px-60">
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
