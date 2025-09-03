import React from 'react'
import Hero from '../components/Hero'
import CarouselComponent from '../components/carousel/CarouselComponent'
import Features from '../components/Features'

const Home = () => {
    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            <section className='snap-start h-screen w-screen'>
                <Hero />
            </section>
            <section className='snap-start h-screen  flex items-center justify-center'>
                <Features />
            </section>
            <section className='snap-start h-screen'>
                <CarouselComponent />
            </section>
             <section className='snap-start h-screen  flex items-center justify-center'>
                <Features />
            </section>
        </div>
    )
}

export default Home
