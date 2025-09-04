import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  
  { name: 'Features', link: '#featuresOne' },
  { name: 'Tools and Tech', link: '#carrousel' },
  { name: 'GitHub', link: 'https://github.com/GonzalezEzequiel-FS-1', external: true },
  { name: 'About Me', link: '#about' },
  { name: 'Contact Me', link: '#contact' },
  { name: 'CV', link: '../../Docs/EzequielGonzalezResume.pdf', external: true },
  
];

const NavigationBar = () => {

  const handleScroll = (e, link) => {
    e.preventDefault();
    const sectionId = link.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/10 backdrop-blur-md shadow-md flex items-center justify-between px-8 py-4"
    >
      {/* Logo */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-bold text-white font-tomorrow tracking-wide"
      >
        EG<span className="text-indigo-400">Web</span>Dev
      </motion.div>

      {/* Menu */}
      <ul className="flex gap-6 text-white font-average text-base">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1, color: '#818cf8' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="cursor-pointer"
          >
            {item.external ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : item.link.startsWith('#') ? (
              <a href={item.link} onClick={(e) => handleScroll(e, item.link)}>
                {item.name}
              </a>
            ) : null}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavigationBar;
