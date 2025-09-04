import React from 'react'
import Hero from '../components/Hero'
import CarouselComponent from '../components/carousel/CarouselComponent'
import Features from '../components/Features'
import ContactForm from '../components/forms/ContactForm'
import FormModal from '../components/modal/FormModal'
import Footer from '../components/footer/Footer'
import AboutMe from '../components/AboutMe/AboutMe'

const Home = () => {

    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
           
                <section id='hero' className='snap-start h-screen w-screen'>
                    <Hero />
                </section>
                <section id={'featuresOne'} className='snap-start h-screen  flex items-center justify-center'>
                    <Features />
                </section>
                <section id='carrousel' className='snap-start h-screen'>
                    <CarouselComponent />
                </section>
                <section id='featuresTwo' className='snap-start h-screen  flex items-center justify-center'>
                    <Features />
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
}

export default Home
