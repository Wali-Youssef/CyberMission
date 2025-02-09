import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [text, setText] = useState("Bienvenue dans le site pour apprendre la cybersécurité");

  return (
    <section className="relative h-screen flex items-center justify-center text-white px-20 py-16 overflow-hidden">
      <div className="flex w-full max-w-7xl justify-between items-center z-10 gap-16">
        {/* Texte principal avec effet glitch */}
        <div className="flex flex-col justify-center text-left max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold glitch"
          >
            {text}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg"
          >
            Reussisez vos missions de cybersécurité et améliorez votre niveau de connaissances en cybersécurité.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/missionPage"
            className="mt-6 px-8 py-4 bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
          >
            Commencer la mission
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
