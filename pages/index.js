import BackgroundParticles from "@/components/BackgroundParticles";
import Hero from "@/components/Hero";
import Mission from "@/components/MissionPage";
import WhatIsCyberSecurity from "@/components/WhatIsCyberSecurity";
import Actualites from "@/components/Actualites";


function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <BackgroundParticles />
      <Hero />
      <WhatIsCyberSecurity />
      <Actualites />
      <Mission />
    
      
     
 
  
      {/* Autres composants de ton site */}
    </div>
  );
}

export default MyApp;
