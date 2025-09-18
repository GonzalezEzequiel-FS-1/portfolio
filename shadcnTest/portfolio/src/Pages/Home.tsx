import React, { forwardRef, useEffect } from "react";
import Hero from "../components/Hero";
import SecondFeatures from "@/components/pageComponents/SecondFeatures.js";

import { motion } from "framer-motion";
import { Button, Container } from "@mantine/core";
import AboutMeCarousel from "@/components/pageComponents/AboutMe.js";
import { useLocation } from "react-router-dom";
import Specializations from "@/components/pageComponents/Specialization.js";
import TechShuffle from "@/components/cards/TechShuffle.js";
import Footer from "@/components/Footer";

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

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start w-screen scroll-smooth"
    >
      <Hero />

      {/* <section
        id="featuresOne"
        className="w-screen flex items-center justify-center"
      >
        <Features />
      </section> */}

      <section
        id="featuresTwo"
        className="w-screen flex-col flex items-center justify-center overflow-x-hidden"
      >
        <SecondFeatures />
      </section>

      <section className="flex justify-center mb-10 items-center px-0 lg:px-20 xl:px-36 2xl:px-60">
        <Specializations />
      </section>

      <section
        id="carrousel"
        className="scroll-smooth w-screen flex flex-col items-center justify-around"
      >
        <TechShuffle />
      </section>
      {/* <section
        id="contact"
        className="w-screen flex flex-col items-center justify-around"
      >
        <ContactForm />
      </section> */}
      <Footer />
    </div>
  );
});

export default Home;
