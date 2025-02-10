"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer la visibilité du menu mobile
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCyberSecurity = () => {
    const cybersecuritySection = document.getElementById("cybersecurity-section");
    if (cybersecuritySection) {
      cybersecuritySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToMissionPage = () => {
    const missionPageSection = document.getElementById("mission-section");
    if (missionPageSection) {
      missionPageSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToActualite = () => {
    const actualiteSection = document.getElementById("actualite-section");
    if (actualiteSection) {
      actualiteSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (section) => {
    if (router.pathname === "/") {
      if (section === "cybersecurity") scrollToCyberSecurity();
      if (section === "mission") scrollToMissionPage();
      if (section === "actualite") scrollToActualite();
    } else {
      router.push("/").then(() => {
        if (section === "cybersecurity") scrollToCyberSecurity();
        if (section === "mission") scrollToMissionPage();
        if (section === "actualite") scrollToActualite();
      });
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${scrolled ? "bg-black/80 py-3" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center space-x-2"
          >
            <a
              href="#"
              className="text-white text-2xl font-bold flex items-center"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Cyber-mission
            </a>
          </motion.div>

          {/* Menu Hamburger */}
          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {["Accueil", "C'est quoi la cybersécurité ?", "Actualités", "Quiz", ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {item === "Accueil" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToTop();
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                    >
                      {item}
                    </a>
                  ) : item === "C'est quoi la cybersécurité ?" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("cybersecurity");
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                    >
                      {item}
                    </a>
                  ) : item === "Actualités" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("actualite");
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                    >
                      {item}
                    </a>
                  ) : item === "Quiz" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("mission");
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                    >
                      {item}
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                    >
                      {item}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Menu Mobile avec fond thématique */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
          {/* On applique un fond noir avec une opacité pour que le contenu reste lisible */}
          <div className="p-6 rounded-lg shadow-lg bg-theme-background bg-cover bg-center">
            <ul className="flex flex-col justify-center items-center space-y-6">
              {["Accueil", "C'est quoi la cybersécurité ?", "Actualités", "Quiz", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {item === "Accueil" ? (
                  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    handleLinkClick("cybersecurity");
    setMenuOpen(false);
  }}
  className="text-white text-lg hover:text-green-500 transition-all text-center"
  style={{ fontFamily: "'Press Start 2P', monospace" }}
>
  {item}
</a>

                  ) : item === "C'est quoi la cybersécurité ?" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("cybersecurity");
                        setMenuOpen(false);
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {item}
                    </a>
                  ) : item === "Actualités" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("actualite");
                        setMenuOpen(false);
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {item}
                    </a>
                  ) : item === "Quiz" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("mission");
                        setMenuOpen(false);
                      }}
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {item}
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="text-white text-lg hover:text-green-500 transition-all"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {item}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
