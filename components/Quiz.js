import { useState } from "react";
import { Shield, AlertTriangle, Terminal, XCircle } from "lucide-react";
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

const quizQuestions = [
  {
    question: "Le hacker essaie d'entrer dans ton réseau, que fais-tu ?",
    answers: [
      "Changer ton mot de passe",
      "Éteindre ton ordinateur",
      "Ignorer l'alerte",
      "Démarrer un antivirus"
    ],
    correctAnswer: "Changer ton mot de passe",
    story: "Tu changes ton mot de passe. Le hacker semble avoir été déstabilisé pour l'instant."
  },
  {
    question: "Le hacker a réussi à pénétrer une partie de ton réseau, que fais-tu ?",
    answers: [
      "Désactiver les connexions réseau",
      "Laisser faire, il ne peut rien faire",
      "Supprimer les fichiers sensibles",
      "Appeler la police"
    ],
    correctAnswer: "Désactiver les connexions réseau",
    story: "Tu as désactivé les connexions réseau. Le hacker perd sa connexion et échoue."
  },
  {
    question: "Le hacker essaie de te phisher via un e-mail, comment réagis-tu ?",
    answers: [
      "Ouvrir l'e-mail, ça peut être important",
      "Supprimer l'e-mail sans l'ouvrir",
      "Répondre pour piéger le hacker",
      "Signaler l'e-mail comme phishing"
    ],
    correctAnswer: "Supprimer l'e-mail sans l'ouvrir",
    story: "Tu as supprimé l'e-mail. Le hacker a perdu sa tentative de phishing."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [story, setStory] = useState("L'attaque commence...");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setStory("L'attaque commence...");
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
      setStory("Tu n'as pas réussi cette fois... Le hacker est plus proche de son objectif.");
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const containerClasses = "max-w-md mx-auto p-6 mt-20 bg-black/50 backdrop-blur-sm rounded-xl border border-green-500/30 shadow-lg shadow-green-500/20";

  if (isFinished) {
    const missionSuccess = score === quizQuestions.length;

    if (missionSuccess) {
      return (
        <section className="relative min-h-screen flex flex-col items-center justify-start text-white px-4 py-16 z-10">
          <div className={containerClasses + " mb-16"}>
            <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h2 className="text-xl font-bold text-center text-green-500 mb-3">Mission Réussie !</h2>
            <div className="p-3 rounded-lg border bg-gradient-to-r from-green-500/20 to-green-500/10 border-green-500/30">
              <p className="text-lg text-center text-green-400">
                Excellent ! Score parfait : {score}/{quizQuestions.length}
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
                  className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-green-500/30 shadow-lg shadow-green-500/20 cursor-pointer hover:scale-105 transform transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center items-center mb-4">{MissionIcons[key]}</div>
                  <h2 className="text-xl font-bold text-center text-green-500">{title}</h2>
                  <p className="mt-2 text-sm text-green-400/80 text-center">
                    {key === "hacking" && "Explorez le monde du piratage éthique."}
                    {key === "cyberdefense" && "Défendez des réseaux contre les menaces."}
                    {key === "forensics" && "Menez des enquêtes numériques."}
                  </p>
                  <motion.a
                    href={`quiz-${key}`}
                    className="mt-4 block px-4 py-2 border border-green-500 text-green-400 font-semibold rounded-lg text-center hover:bg-green-500 hover:text-black transition-all"
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
        <h2 className="text-xl font-bold text-center text-red-500 mb-3">Mission Échouée</h2>
        <div className="p-3 rounded-lg border bg-gradient-to-r from-red-500/20 to-red-500/10 border-red-500/30">
          <p className="text-lg text-center text-red-400">
            Le hacker a réussi à pénétrer le système. Score : {score}/{quizQuestions.length}
          </p>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full p-2 mt-4 rounded-lg bg-green-500 hover:bg-green-400 text-black transition-all"
        >
          Recommencer la mission
        </button>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <Terminal className="w-12 h-12 mx-auto mb-4 text-green-500" />
      <h2 className="text-xl font-bold text-center text-green-500 mb-6">
        Alerte Intrusion
      </h2>

      <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30">
        <AlertTriangle className="w-5 h-5 text-green-500 mb-2" />
        <p className="text-base text-green-400">{story}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold text-green-400 mb-3">
          {quizQuestions[currentQuestion].question}
        </p>
        
        <div className="space-y-2">
          {quizQuestions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`w-full p-2 text-left rounded-lg transition-all border ${
                selectedAnswer === answer
                  ? "bg-green-500/20 border-green-500 text-green-400"
                  : "bg-black/30 border-green-500/30 text-green-400/80 hover:bg-green-500/10 hover:border-green-500/50"
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
            ? "bg-green-500/20 cursor-not-allowed text-green-500/50"
            : "bg-green-500 hover:bg-green-400"
        }`}
      >
        {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Terminer la mission"}
      </button>
    </div>
  );
};

export default Quiz;