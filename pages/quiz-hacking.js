import Quiz from "@/components/Quiz";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function QuizPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundParticles />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Quiz />
      </div>
    </div>
  );
}