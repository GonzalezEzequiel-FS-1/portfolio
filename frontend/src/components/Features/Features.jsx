import React from 'react'
import FeatureCard from '../cards/FeatureCard'
const features = [
  {
    title: 'Full-Stack Expertise',
    sub: 'Proficient in the MERN stack with hands-on experience building scalable, maintainable web applications.'
  },
  {
    title: 'ADHD-Focused Productivity Apps',
    sub: 'Designed and developed "Momentum," a full-stack app tailored for ADHD users to organize tasks, track goals, and gamify productivity.'
  },
  {
    title: 'Doctor in Medicine',
    sub: 'Educational background in medicine, bringing a disciplined, analytical, and detail-oriented approach to problem-solving.'
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
