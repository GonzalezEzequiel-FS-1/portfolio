import React from 'react'
import { motion } from 'framer-motion'

const menuItems = [
  { name: 'Features', link: '#featuresOne' },
  { name: 'Tools and Tech', link: '#carrousel' },
  { name: 'GitHub', link: 'https://github.com/GonzalezEzequiel-FS-1', external: true },
  { name: 'About Me', link: '#about' },
  { name: 'Contact Me', link: '#contact' },
  { name: 'CV', link: '/Docs/EzequielGonzalezResume.pdf', external: true },
]

const NavigationBar = ({ scrollY, scrollToTop}) => {
  const showNav = scrollY <= 120 // show when near top

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4">
      {/* Logo always visible */}
      <div
  onClick={scrollToTop}
  className="text-2xl font-bold text-white font-tomorrow tracking-wide cursor-pointer"
>
  EG<span className="text-indigo-400">Web</span>Dev
</div>


      {/* Menu fades in/out */}
      <motion.ul
        className="flex gap-6 text-white font-average text-base"
        initial={{ opacity: 1 }}
        animate={{ opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="cursor-pointer">
            {item.external ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
            ) : (
              <a href={item.link}>{item.name}</a>
            )}
          </li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default NavigationBar
