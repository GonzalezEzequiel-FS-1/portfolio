import React from 'react'
import Hero from '../components/Hero'
import CarouselComponent from '../components/carousel/CarouselComponent'
import Features from '../components/Features'

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start bg-slate-950">
            <Hero />

            {/* Features / Highlights Section */}
            <Features />
            <CarouselComponent />
        </div>
    )

}

export default Home
