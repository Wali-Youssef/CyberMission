import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionIcons = {
  hacking: (
    <motion.img
      src="/anonymous.svg"
      alt="Anonymous Icon"
      className="w-24 h-24 text-green-500"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  ),
  cyberdefense: (
    <motion.img
      src="/covid-19.svg"
      alt="Covid-19 Icon"
      className="w-24 h-24 text-red-500"
      initial={{ rotate: -15 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  ),
  forensics: (
    <motion.img
      src="/ordinateur.svg"
      alt="Computer Icon"
      className="w-24 h-24 text-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    />
  ),
};

const Mission = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="relative h-screen flex items-center justify-center text-white px-20 py-16 z-10">
      <div className="flex flex-col justify-center text-center max-w-4xl space-y-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl font-bold"
          ref={ref}
        >
          Choisissez Votre Mission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-lg mb-8"
        >
          Sélectionnez une mission pour commencer votre aventure !
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-10 w-full">
          {Object.entries({ hacking: "Mission Hacking", cyberdefense: "Mission Cyberdéfense", forensics: "Mission Forensique" }).map(([key, title], index) => (
            <motion.div
              key={key}
              className="p-8 rounded-lg shadow-xl cursor-pointer hover:scale-105 transform transition-all w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1 + index * 0.5, duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center mb-6">{MissionIcons[key]}</div>
              <h2 className="text-3xl font-bold text-center">{title}</h2>
              <p className="mt-4 text-lg text-center">
                {key === "hacking" && "Explorez le monde du piratage éthique et apprenez à pénétrer des systèmes pour mieux les protéger."}
                {key === "cyberdefense" && "Défendez des réseaux et des systèmes contre des attaques et des menaces numériques."}
                {key === "forensics" && "Menez des enquêtes numériques, collectez des preuves et résolvez des crimes informatiques."}
              </p>
              <motion.a
  href={`quiz-${key}`}
  className={`mt-6 inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg shadow-md 
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
