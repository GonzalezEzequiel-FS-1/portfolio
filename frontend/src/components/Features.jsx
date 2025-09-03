import React from 'react'
import FeatureCard from './cards/FeatureCard'
const features = [
    {
        title: 'Custom Web Solutions',
        sub: 'Tailored applications that solve real problems for your business or personal projects.'
    }, {
        title: 'UI / UX Design',
        sub: 'Clean, modern, and intuitive designs that engage users and improve experiences.'
    }, {
        title: 'Performance & Optimization',
        sub: 'Fast, reliable, and optimized solutions for maximum efficiency and scalability.'
    },
    {
        title: 'Momentum App',
        sub: 'A productivity app for ADHD, combining task organization and gamification.'
    }, {
        title: 'EG WebDev Portfolio',
        sub: 'A showcase of high-end web development projects with professional animations and responsive design.'
    }, {
        title: 'Coming Soon',
        sub: 'Placeholder for future projects or client work with cutting-edge design'
    }
]

const Features = () => {
    return (
        <div className='w-screen'>
            <FeatureCard
                titleOne={features[0].title}
                subOne={features[0].sub}
                titleTwo={features[1].title}
                subTwo={features[1].sub}
                titleThree={features[2].title}
                subThree={features[2].sub}
            />

            

        </div>
    )
}

export default Features
