import React from 'react'

const Features = () => {
  return (
    <div>
      <section className="w-full max-w-6xl py-24 flex flex-wrap justify-between gap-8 px-6">
                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">Custom Web Solutions</h2>
                    <p className="text-center">Tailored applications that solve real problems for your business or personal projects.</p>
                </div>

                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">UI / UX Design</h2>
                    <p className="text-center">Clean, modern, and intuitive designs that engage users and improve experiences.</p>
                </div>

                <div className="flex-1 min-w-[280px] h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform">
                    <h2 className="text-2xl font-bold mb-2">Performance & Optimization</h2>
                    <p className="text-center">Fast, reliable, and optimized solutions for maximum efficiency and scalability.</p>
                </div>
            </section>

            {/* Example Project Section */}
            <section className="w-full max-w-6xl py-24 flex flex-col items-center px-6 gap-12">
                <h2 className="text-4xl text-white font-tomorrow font-bold mb-8">Featured Projects</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="h-80 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-3xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold">Momentum App</h3>
                        <p className="mt-2 text-sm">A productivity app for ADHD, combining task organization and gamification.</p>
                    </div>

                    <div className="h-80 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold">EG WebDev Portfolio</h3>
                        <p className="mt-2 text-sm">A showcase of high-end web development projects with professional animations and responsive design.</p>
                    </div>

                    <div className="h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold">Coming Soon</h3>
                        <p className="mt-2 text-sm">Placeholder for future projects or client work with cutting-edge design.</p>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Features
