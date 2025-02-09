import Quiz from "@/components/Quiz3";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function QuizPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <BackgroundParticles />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Quiz />
      </div>
    </div>
  );
}