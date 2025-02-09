import { useState } from "react";
import { Search, AlertTriangle, Terminal, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const quizQuestions = [
  {
    question: "Un fichier suspect a été trouvé sur un serveur. Quelle est la première étape ?",
    answers: [
      "Analyser le fichier dans un environnement isolé",
      "Supprimer immédiatement le fichier",
      "Ouvrir le fichier pour voir son contenu",
      "Ignorer l'alerte, c'est sûrement une fausse alerte"
    ],
    correctAnswer: "Analyser le fichier dans un environnement isolé",
    story: "Bonne approche ! L'analyse révèle un malware déguisé en document légitime."
  },
  {
    question: "Des logs montrent une connexion non autorisée à un serveur. Que fais-tu ?",
    answers: [
      "Vérifier les adresses IP et l'origine de la connexion",
      "Redémarrer le serveur immédiatement",
      "Changer tous les mots de passe du réseau",
      "Rien, cela arrive souvent"
    ],
    correctAnswer: "Vérifier les adresses IP et l'origine de la connexion",
    story: "Excellente démarche ! Tu identifies une tentative d'intrusion et peux renforcer la sécurité."
  },
  {
    question: "Une clé USB inconnue a été insérée dans un poste critique. Quelle est la bonne réaction ?",
    answers: [
      "Isoler immédiatement la machine du réseau",
      "Ouvrir la clé pour voir son contenu",
      "Formater la clé et continuer à travailler",
      "Ignorer et poursuivre le travail"
    ],
    correctAnswer: "Isoler immédiatement la machine du réseau",
    story: "Bonne réactivité ! L'isolement prévient toute infection potentielle du réseau."
  },
  {
    question: "Un employé reçoit un email suspect demandant des informations confidentielles. Quelle est la meilleure action ?",
    answers: [
      "Signaler immédiatement l'email au service de sécurité",
      "Répondre pour demander plus de précisions",
      "Fournir les informations demandées",
      "Ignorer et supprimer l'email"
    ],
    correctAnswer: "Signaler immédiatement l'email au service de sécurité",
    story: "Bonne vigilance ! Signaler l'email permet d'éviter une attaque de phishing."
  }
];

const Quiz3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [story, setStory] = useState("Début d'une nouvelle enquête numérique...");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setStory("Début d'une nouvelle enquête numérique...");
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
      setStory("Erreur d'analyse... Le criminel numérique a pris de l'avance.");
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const containerClasses = "max-w-md mx-auto p-6 mt-20 bg-black/50 backdrop-blur-sm rounded-xl border border-red-500/30 shadow-lg shadow-red-500/20";

  if (isFinished) {
    return (
      <div className={containerClasses}>
        {score >= 3 ? (
          <>
            <Search className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-bold text-center text-red-500 mb-3">Enquête Réussie !</h2>
            <p className="text-lg text-center text-red-400">Score : {score}/{quizQuestions.length}</p>
          </>
        ) : (
          <>
            <XCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-bold text-center text-red-500 mb-3">Échec de l'Enquête</h2>
            <p className="text-lg text-center text-red-400">Score : {score}/{quizQuestions.length}</p>
          </>
        )}
        <button onClick={resetQuiz} className="w-full p-2 mt-4 rounded-lg bg-red-500 hover:bg-red-400 text-black transition-all">
          Reprendre la mission
        </button>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <Terminal className="w-12 h-12 mx-auto mb-4 text-red-500" />
      <h2 className="text-xl font-bold text-center text-red-500 mb-6">Laboratoire de Cybercriminalistique</h2>

      <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30">
        <AlertTriangle className="w-5 h-5 text-red-500 mb-2" />
        <p className="text-base text-red-400">{story}</p>
      </div>

      <p className="text-lg font-semibold text-red-400 mb-3">{quizQuestions[currentQuestion].question}</p>
      <div className="space-y-2">
        {quizQuestions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`w-full p-2 text-left rounded-lg transition-all border ${
              selectedAnswer === answer
                ? "bg-red-500/20 border-red-500 text-red-400"
                : "bg-black/30 border-red-500/30 text-red-400/80 hover:bg-red-500/10 hover:border-red-500/50"
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
        className={`w-full p-2 rounded-lg text-black transition-all ${
          selectedAnswer === null
            ? "bg-red-500/20 cursor-not-allowed text-red-500/50"
            : "bg-red-500 hover:bg-red-400"
        }`}
      >
        {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Terminer la mission"}
      </button>
    </div>
  );
};

export default Quiz3;
