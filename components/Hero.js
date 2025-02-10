import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [text, setText] = useState("Bienvenue dans le site pour apprendre la cybersécurité");

  // Fonction pour scroller jusqu'à Mission
  const scrollToMission = () => {
    const missionSection = document.getElementById("mission-section");
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white px-6 py-12 md:px-20 md:py-16 overflow-hidden">
        <div className="flex w-full max-w-7xl justify-between items-center z-10 gap-16">
          {/* Texte principal avec effet glitch */}
          <div className="flex flex-col justify-center text-left max-w-xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold glitch"
            >
              {text}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-base sm:text-lg md:text-xl"
            >
              Réussissez vos missions de cybersécurité et améliorez votre niveau de connaissances en cybersécurité.
            </motion.p>

            {/* Bouton qui scrolle jusqu'à Mission */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMission}
              className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
            >
              Commencer la mission
            </motion.button>
          </div>
        </div>
      </section>

      {/* Mission est déjà présent dans MissionPage.js */}
    </>
  );
};

export default Hero;
