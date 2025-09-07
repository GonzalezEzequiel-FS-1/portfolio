import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Features", link: "#featuresOne" },
  { name: "Tools and Tech", link: "#carrousel" },
  {
    name: "GitHub",
    link: "https://github.com/GonzalezEzequiel-FS-1",
    external: true,
  },
  { name: "About Me", link: "#about" },
  { name: "Contact Me", link: "#contact" },
  { name: "CV", link: "/Docs/EzequielGonzalezResume.pdf", external: true },
];

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (link, external) => {
    if (external) {
      window.open(link, "_blank", "noopener noreferrer");
      return;
    }

    const el = document.querySelector(link);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
        className="hidden md:flex gap-6 text-white font-average text-base"
        initial={{ opacity: 1 }}
        animate={{ opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: showNav ? "auto" : "none" }}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="cursor-pointer">
            <span onClick={() => handleClick(item.link, item.external)}>
              {item.name}
            </span>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavigationBar;
