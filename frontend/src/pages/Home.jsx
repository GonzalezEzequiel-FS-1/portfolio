import React, { forwardRef, useEffect } from 'react'
import Hero from '../components/Hero'
import CarouselComponent from '../components/carousel/CarouselComponent'
import Features from '../components/Features/Features'
import ContactForm from '../components/forms/ContactForm'
import FormModal from '../components/modal/FormModal'
import Footer from '../components/footer/Footer'
import AboutMe from '../components/AboutMe/AboutMe'
import { motion } from "framer-motion";
import SecondFeatures from '../components/Features/SecondFeatures'


const Home = forwardRef(({onScrollChange},ref) => {


 useEffect(() => {
    const scrollEl = ref?.current;
    if (!scrollEl) return;

    const handleScroll = (e) => {
      const y = e.target.scrollTop;
      if (onScrollChange) onScrollChange(y); // notify parent
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, [ref, onScrollChange]);

    return (
        <div 
            ref={ref}
            className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >

            <section id='hero' className='snap-start h-screen'>
                <Hero />
            </section>
            <section id={'featuresOne'} className='snap-start h-screen  flex items-center justify-center'>

                <Features />
            </section>
            <section id='carrousel' className='snap-start h-screen'>
                <CarouselComponent />
            </section>
            <section id='featuresTwo' className='snap-start h-screen  flex items-center justify-center'>
                <SecondFeatures />
            </section>
            <section id='about' className='snap-start h-screen  flex items-center justify-center'>
                <AboutMe />
            </section>
            <section id='contact' className='snap-start h-screen  flex flex-col  items-center justify-between pt-20'>
                <ContactForm />
                <Footer />
            </section>
        </div>
    )
})

export default Home
