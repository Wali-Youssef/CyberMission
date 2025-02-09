import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 200, // Densité de particules
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.2,
          },
          links: {
            enable: true,
            distance: 100,
            color: "#00ff00",
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
        },
        polygon: {
          enable: true,
          scale: 0.4,
          type: "inline",
          move: { radius: 10 },
          url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Padlock_icon.svg", // URL d'un SVG de cadenas
          position: {
            x: 70, // Positionné à droite
            y: 50,
          },
        },
      }}
      className="absolute inset-0 w-full h-full z-0" // Couvrir toute la page, z-index=0 pour être derrière
    />
  );
};

export default BackgroundParticles;
