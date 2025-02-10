"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaClipboardList } from "react-icons/fa"; // Icônes
import { useEffect, useState } from "react";

const WhatIsCyberSecurity = () => {
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

    const section = document.getElementById("cybersecurity-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="cybersecurity-section"
      className="relative h-screen flex items-center justify-center text-white px-6 py-12 sm:px-20 sm:py-16"
    >
      <div className="max-w-3xl text-center">
        {/* Titre principal avec animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 1.2 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          C'est quoi la cybersécurité ?
        </motion.h1>

        {/* Description de la cybersécurité */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg mb-8"
        >
          La cybersécurité désigne l'ensemble des pratiques, technologies et processus
          utilisés pour protéger les systèmes informatiques, les réseaux et les données
          contre les attaques, les intrusions, les virus et autres menaces numériques.
          Dans un monde de plus en plus connecté, la cybersécurité est essentielle pour
          assurer la confidentialité, l'intégrité et la disponibilité des informations.
        </motion.p>

        {/* Les 3 valeurs de la cybersécurité */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
          {/* Valeur 1: Confidentialité */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center"
          >
            <FaLock className="text-5xl sm:text-6xl text-green-500 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Confidentialité</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              Assurer que les informations sensibles sont accessibles uniquement aux
              utilisateurs autorisés.
            </p>
          </motion.div>

          {/* Valeur 2: Intégrité */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="flex flex-col items-center"
          >
            <FaShieldAlt className="text-5xl sm:text-6xl text-green-500 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Intégrité</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              Garantir que les données ne soient pas altérées ou corrompues de manière
              non autorisée.
            </p>
          </motion.div>

          {/* Valeur 3: Disponibilité */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center"
          >
            <FaClipboardList className="text-5xl sm:text-6xl text-green-500 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Disponibilité</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              S'assurer que les systèmes et les informations sont disponibles pour les
              utilisateurs autorisés au moment voulu.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCyberSecurity;
