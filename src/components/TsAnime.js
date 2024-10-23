// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const TsAnime = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull;
//     engine;
//   }, []);

//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine); // Correct way to load the particles engine
//   }, []);

//   const particlesLoaded = useCallback(async () => {}, []);

//   return (
//     <Particles
//       className="w-full absolute h-full z-10"
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         fullScreen: { enable: false },
//         background: { color: { value: "" } },
//         fpslimit: 120,
//         interactivity: {
//           events: {
//             onClick: { enable: false, mode: "push" },
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//           },
//           modes: {
//             push: { quantity: 90 },
//             repulse: { distance: 200, duration: 0.4 },
//           },
//         },
//         particles: {
//           color: {
//             value: "#e68e2e",
//           },
//           links: {
//             color: "#f5d393",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: { enable: true },
//           move: {
//             directions: "none",
//             enable: true,
//             outModes: { default: "bounce" },
//             random: false,
//             speed: 1,
//             straight: false,
//           },
//           number: { density: { enable: true, area: 800 }, value: 80 },
//           opacity: { value: 0.5 },
//           shape: { type: "circle" },
//           size: { value: { min: 1, max: 5 } },
//           detectRetina: true,
//         },
//       }}
//     />
//   );
// };

// export default TsAnime;

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
export default function TsAnime() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="w-full absolute h-full z-10"
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            fullScreen: { enable: false },
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                // value: "#e68e2e",
                // value: "#FEB649",
                value: "#2196f3",
              },
              links: {
                color: "#1d1d1d",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
