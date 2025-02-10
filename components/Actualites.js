"use client";

import { motion } from "framer-motion";
import { Shield, Hospital, Lock } from "lucide-react"; // Icônes Lucide
import { useEffect, useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Nouvelle faille de sécurité détectée sur les serveurs cloud",
    description: "Une vulnérabilité critique permet aux hackers d'exploiter les données sensibles des entreprises.",
    link: "https://www.cyber-securite.fr/attention-des-millions-de-serveurs-exposes-a-des-attaques-a-cause-dune-faille-critique/",
    icon: <Shield className="w-16 h-16 text-green-500" />,
  },
  {
    id: 2,
    title: "Attaque massive par ransomware : des hôpitaux touchés",
    description: "Un ransomware a paralysé plusieurs établissements de santé en Europe.",
    link: "https://www.usine-digitale.fr/article/un-nouvel-hopital-paralyse-par-un-ransomware-paie-sa-rancon-et-reste-bloque.N392437",
    icon: <Hospital className="w-16 h-16 text-red-500" />,
  },
  {
    id: 3,
    title: "Les mots de passe les plus piratés en 2025",
    description: "Découvrez les erreurs courantes à éviter pour protéger vos comptes.",
    link: "https://www.capital.fr/economie-politique/voici-les-mots-de-passe-les-plus-utilises-et-donc-les-plus-dangereux-1508976",
    icon: <Lock className="w-16 h-16 text-blue-500" />,
  },
];

const Actualites = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArticles(newsData);
    }, 1000);
  }, []);

  return (
    <section id="actualite-section" className="relative py-16 px-6 sm:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre avec animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          🔥 Actualités Cybersécurité 🔥
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl text-center mt-4 text-gray-300"
        >
          Restez informé des dernières menaces et tendances en cybersécurité.
        </motion.p>

        {/* Section responsive */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length === 0 ? (
            <p className="text-center text-gray-400">Chargement des actualités...</p>
          ) : (
            articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                className="p-6 bg-black/60 backdrop-blur-lg rounded-xl shadow-xl border border-green-500/40 
                           hover:scale-105 hover:shadow-green-500 transition-all"
              >
                <div className="flex justify-center mb-4">{article.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-400">{article.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mt-2">{article.description}</p>
                <a
                  href={article.link}
                  className="mt-4 inline-block text-green-300 hover:text-green-100 transition font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Lire plus →
                </a>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Actualites;
