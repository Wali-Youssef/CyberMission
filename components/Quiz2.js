import { useState } from "react";
import { Shield, AlertTriangle, Terminal, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionIcons = {
  hacking: (
    <motion.img
      src="/anonymous.svg"
      alt="Anonymous Icon"
      className="w-24 h-24 text-blue-500"
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

const quizQuestions = [
  {
    question: "Une alerte indique une activité suspecte sur plusieurs ports réseau, quelle est ta première action ?",
    answers: [
      "Analyser les logs de connexion",
      "Bloquer immédiatement tous les ports",
      "Redémarrer le serveur",
      "Ignorer l'alerte, c'est probablement un faux positif"
    ],
    correctAnswer: "Analyser les logs de connexion",
    story: "Bonne analyse ! Les logs révèlent une tentative de scan de ports. Tu peux maintenant mettre en place une stratégie de défense appropriée."
  },
  {
    question: "Un malware a été détecté sur un poste du réseau, que fais-tu en priorité ?",
    answers: [
      "Isoler immédiatement le poste du réseau",
      "Lancer un antivirus",
      "Formater le poste",
      "Éteindre le poste"
    ],
    correctAnswer: "Isoler immédiatement le poste du réseau",
    story: "Excellente décision ! L'isolation du poste empêche la propagation du malware sur le réseau."
  },
  {
    question: "Tu constates un pic inhabituel de trafic sortant, quelle est la meilleure réaction ?",
    answers: [
      "Bloquer tout le trafic sortant",
      "Analyser la nature et la destination du trafic",
      "Augmenter la bande passante",
      "Attendre que ça se calme"
    ],
    correctAnswer: "Analyser la nature et la destination du trafic",
    story: "Parfait ! L'analyse révèle une exfiltration de données. Tu peux maintenant bloquer les destinations malveillantes."
  },
  {
    question: "Les utilisateurs signalent des ralentissements système importants, que fais-tu ?",
    answers: [
      "Vérifier l'utilisation des ressources et les processus actifs",
      "Redémarrer tous les serveurs",
      "Demander aux utilisateurs de patienter",
      "Augmenter les ressources système"
    ],
    correctAnswer: "Vérifier l'utilisation des ressources et les processus actifs",
    story: "Bien joué ! Tu découvres un cryptominer malveillant qui consommait les ressources."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [story, setStory] = useState("Alerte de sécurité détectée sur le réseau...");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setStory("Alerte de sécurité détectée sur le réseau...");
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setStory(quizQuestions[currentQuestion].story);
    } else {
      setStory("Action incorrecte... La menace progresse dans le système.");
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const containerClasses = "max-w-md mx-auto p-6 mt-20 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20";

  if (isFinished) {
    const missionSuccess = score >= 3;

    if (missionSuccess) {
      return (
        <section className="relative min-h-screen flex flex-col items-center justify-start text-white px-4 py-16 z-10">
          <div className={containerClasses + " mb-16"}>
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h2 className="text-xl font-bold text-center text-blue-500 mb-3">Système Sécurisé !</h2>
            <div className="p-3 rounded-lg border bg-gradient-to-r from-blue-500/20 to-blue-500/10 border-blue-500/30">
              <p className="text-lg text-center text-blue-400">
                Félicitations ! Score : {score}/{quizQuestions.length}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center max-w-4xl space-y-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold"
              ref={ref}
            >
              Nouvelles Missions Débloquées
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 w-full">
              {Object.entries({ hacking: "Mission Hacking", cyberdefense: "Mission Cyberdéfense", forensics: "Mission Forensique" }).map(([key, title], index) => (
                <motion.div
                  key={key}
                  className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/20 cursor-pointer hover:scale-105 transform transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center items-center mb-4">{MissionIcons[key]}</div>
                  <h2 className="text-xl font-bold text-center text-blue-500">{title}</h2>
                  <p className="mt-2 text-sm text-blue-400/80 text-center">
                    {key === "hacking" && "Explorez le monde du piratage éthique."}
                    {key === "cyberdefense" && "Défendez des réseaux contre les menaces."}
                    {key === "forensics" && "Menez des enquêtes numériques."}
                  </p>
                  <motion.a
                    href={`quiz-${key}`}
                    className="mt-4 block px-4 py-2 border border-blue-500 text-blue-400 font-semibold rounded-lg text-center hover:bg-blue-500 hover:text-black transition-all"
                  >
                    Commencer
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    return (
      <div className={containerClasses}>
        <XCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        <h2 className="text-xl font-bold text-center text-red-500 mb-3">Système Compromis</h2>
        <div className="p-3 rounded-lg border bg-gradient-to-r from-red-500/20 to-red-500/10 border-red-500/30">
          <p className="text-lg text-center text-red-400">
            Le système n'a pas pu être protégé. Score : {score}/{quizQuestions.length}
          </p>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full p-2 mt-4 rounded-lg bg-blue-500 hover:bg-blue-400 text-black transition-all"
        >
          Reprendre la mission
        </button>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <Terminal className="w-12 h-12 mx-auto mb-4 text-blue-500" />
      <h2 className="text-xl font-bold text-center text-blue-500 mb-6">
        Centre d'Opérations de Sécurité
      </h2>

      <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/30">
        <AlertTriangle className="w-5 h-5 text-blue-500 mb-2" />
        <p className="text-base text-blue-400">{story}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold text-blue-400 mb-3">
          {quizQuestions[currentQuestion].question}
        </p>
        
        <div className="space-y-2">
          {quizQuestions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`w-full p-2 text-left rounded-lg transition-all border ${
                selectedAnswer === answer
                  ? "bg-blue-500/20 border-blue-500 text-blue-400"
                  : "bg-black/30 border-blue-500/30 text-blue-400/80 hover:bg-blue-500/10 hover:border-blue-500/50"
              }`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
        className={`w-full p-2 rounded-lg text-black transition-all ${
          selectedAnswer === null
            ? "bg-blue-500/20 cursor-not-allowed text-blue-500/50"
            : "bg-blue-500 hover:bg-blue-400"
        }`}
      >
        {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Terminer la mission"}
      </button>
    </div>
  );
};

export default Quiz;