import './Landing.css';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { memo, useCallback } from "react";

function ParticleBackground() {
  const particlesInit = useCallback(async (main) => {
    await loadSlim(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default memo(ParticleBackground);
