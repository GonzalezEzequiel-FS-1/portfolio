import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Features", link: "#featuresOne" },
  { name: "Tools and Tech", link: "#carrousel" },
  {
    name: "GitHub",
    link: "https://github.com/GonzalezEzequiel-FS-1",
    external: true,
  },
  { name: "About Me", link: "/about" },
  { name: "Contact Me", link: "#contact" },
  { name: "CV", link: "/Docs/EzequielGonzalezResume2025.pdf", external: true },
];

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const scrollToTopOrHome = () => {
  if (location.pathname === "/") {
    // Already on homepage → just scroll up
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Navigate to homepage
    navigate("/", { state: { scrollTo: "#top" } }); 
  }
};

  
  const handleClick = (link, external) => {
    if (external) {
      window.open(link, "_blank", "noopener noreferrer");
      return;
    }

    if (link.startsWith("#")) {
      const el = document.querySelector(link);

      if (el) {
        // If the element exists on the current page, scroll to it
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on the homepage, navigate there and pass the section to scroll to
        navigate("/", { state: { scrollTo: link } });
      }

      return;
    }

    if (link.includes("/")) {
      // route + hash

      console.log(
        `From ForwardSlash function ${link}, Location ${JSON.stringify(
          location
        )}`
      );
      navigate(link);
      return;
    }

    // plain route (no hash)
    navigate(link);
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
        onClick={scrollToTopOrHome}
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
