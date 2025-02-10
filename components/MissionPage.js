"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Icônes des missions
const MissionIcons = {
  hacking: (
    <motion.img
      src="/anonymous.svg"
      alt="Anonymous Icon"
      className="w-20 h-20 sm:w-24 sm:h-24 text-green-500"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  ),
  cyberdefense: (
    <motion.img
      src="/covid-19.svg"
      alt="Covid-19 Icon"
      className="w-20 h-20 sm:w-24 sm:h-24 text-red-500"
      initial={{ rotate: -15 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  ),
  forensics: (
    <motion.img
      src="/ordinateur.svg"
      alt="Computer Icon"
      className="w-20 h-20 sm:w-24 sm:h-24 text-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    />
  ),
};

const Mission = () => {
  const [inView, setInView] = useState(false);

  // Fonction d'observation pour vérifier si la section est dans la vue
  const handleScrollIntoView = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInView(true); // Lance l'animation si l'élément est dans la vue
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollIntoView, {
      threshold: 0.5, // L'élément doit être visible à 50% pour que l'animation se déclenche
    });

    const section = document.getElementById("mission-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="mission-section"
      className="relative min-h-screen flex items-center justify-center text-white px-6 sm:px-12 lg:px-20 py-16 z-10"
    >
      <div className="flex flex-col justify-center text-center max-w-4xl space-y-10">
        {/* Titre principal avec animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          Choisissez Votre Mission
        </motion.h1>

        {/* Description de la mission */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-lg sm:text-xl mb-8"
        >
          Sélectionnez une mission pour commencer votre aventure !
        </motion.p>

        {/* Icônes des missions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 w-full">
          {Object.entries({
            hacking: "Mission Hacking",
            cyberdefense: "Mission Cyberdéfense",
            forensics: "Mission Forensique"
          }).map(([key, title], index) => (
            <motion.div
              key={key}
              className="p-6 sm:p-8 rounded-lg shadow-xl cursor-pointer hover:scale-105 transform transition-all w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1 + index * 0.5, duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center mb-6">{MissionIcons[key]}</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-center">{title}</h2>
              <p className="mt-4 text-base sm:text-lg text-center">
                {key === "hacking" && "Explorez le monde du piratage éthique et apprenez à pénétrer des systèmes pour mieux les protéger."}
                {key === "cyberdefense" && "Défendez des réseaux et des systèmes contre des attaques et des menaces numériques."}
                {key === "forensics" && "Menez des enquêtes numériques, collectez des preuves et résolvez des crimes informatiques."}
              </p>
              <motion.a
                href={`quiz-${key}`}
                className={`mt-6 inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg shadow-md 
                  ${key === "hacking" ? "hover:bg-green-500 hover:text-white" : ""}
                  ${key === "cyberdefense" ? "hover:bg-blue-500 hover:text-white" : ""}
                  ${key === "forensics" ? "hover:bg-red-500 hover:text-white" : ""}
                  transition`}
              >
                Choisir
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
