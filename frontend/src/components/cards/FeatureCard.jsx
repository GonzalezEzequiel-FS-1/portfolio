import { Text } from '@mantine/core'
import React from 'react'

const FeatureCard = ({ titleOne, subOne, titleTwo, subTwo, titleThree, subThree }) => {
    return (
        <div className='w-screen flex items-center justify-around'>
            <div className='max-w-4/12 rounded-3xl p-10'>
                <Text
                    styles={{
                        root: {
                            textAlign: 'center',
                            padding:'1rem'
                        }
                    }}
                    size={'3rem'}
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'blue', deg: 202 }}
                >
                    Building Exceptional Web Experiences
                </Text>
                <Text
                variant='dimmed'>
                    We create high-quality web solutions that combine design, performance, and usability. From custom web applications to responsive interfaces, every project is crafted with precision and care to deliver an exceptional user experience. Our approach balances functionality with aesthetics, ensuring your website or application not only works flawlessly but also captivates your audience. We believe in scalable, maintainable solutions that grow with your business while keeping your users engaged and satisfied.
                </Text>
            </div>
            <section className="py-5 w-1/3 flex flex-wrap justify-between gap-8 px-6">
                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">{titleOne}</h2>
                    <p className="text-center">{subOne}</p>
                </div>

                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">{titleTwo}</h2>
                    <p className="text-center">{subTwo}</p>
                </div>

                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">{titleThree}</h2>
                    <p className="text-center">{subThree}</p>
                </div>
            </section>
        </div>
    )
}

export default FeatureCard


