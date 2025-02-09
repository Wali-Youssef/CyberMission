"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-black/80 py-3 backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
          <a href="#" className="text-white text-2xl font-bold">
            LeNOM 🚀
          </a>
        </motion.div>

        <nav>
          <ul className="flex space-x-6">
            {["Accueil", "Quiz", "Jeu", "Contact"].map((item, index) => (
              <motion.li key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 150 }}>
                <a href="#" className="text-white text-lg hover:text-blue-400 transition">{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
