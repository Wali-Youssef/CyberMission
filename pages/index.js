import BackgroundParticles from "@/components/BackgroundParticles";
import Hero from "@/components/Hero";
import Mission from "@/components/MissionPage";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <BackgroundParticles />
      <Hero />
      <Mission />
      {/* Autres composants de ton site */}
    </div>
  );
}

export default MyApp;
