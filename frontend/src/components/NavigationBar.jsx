import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'About Me', link: '#about' },
  { name: 'CV', link: '/cv.pdf', external: true },
  { name: 'Contact Me', link: '#contact' },
  { name: 'GitHub', link: 'https://github.com/GonzalezEzequiel-FS-1', external: true },
];

const NavigationBar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md shadow-md flex items-center justify-between px-8 py-4"
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

      {/* Center / Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hidden md:flex items-center justify-center flex-1"
      >
        <h1 className="text-white font-average text-lg tracking-wide">
          Ezequiel Gonzalez - Full Stack Developer
        </h1>
      </motion.div>

      {/* Menu */}
      <ul className="flex gap-6 text-white font-average text-base">
        {menuItems.map((item, index) => (
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
            ) : (
              <Link to={item.link}>{item.name}</Link>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavigationBar;
