import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import React from "react";

export default function LogoAnimation({ setAnimationOver }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    (async () => {
      await animate("#logoPath", {
        fill: "rgba(255, 255, 255, 0)",
        pathLength: 0,
      });
      await animate(
        "#logoPath",
        {
          pathLength: 1.1,
          stroke: "rgba(255, 255, 255, 1)",
          fill: "rgba(255, 255, 255, 1)",
        },
        { duration: 2 },
      );
      await animate(
        "#logo",
        { x: 200, scale: 2 },
        { duration: 0.5, ease: "anticipate" },
      );
      setAnimationOver(true);
    })();
  }, [animate, setAnimationOver]);

  return (
    <>
      <div
        ref={scope}
        className="absolute z-10 flex h-full w-full items-center justify-center"
      >
        <svg
          width="240pt"
          height="240pt"
          viewBox="-7 -30 240 240"
          xmlns="http://www.w3.org/2000/svg"
          id="logo"
        >
          <path
            d="m77.014 134.65c-36.99-5.096-42.455-79.432 8.0782-85.218 50.534-5.7858 106.84-6.8201 
            120.13-15.682 8.86-5.9083 15.2-16.869 19.02-32.883-70.456-1.6214-120.46-0.97665-150.01
            1.9343-97.372 9.5908-100.33 167.44-0.6448 181.18 60.434 8.326 96.821-27.51 107.14-84.463
            3.675 21.954-0.407 59.48 12.25 73.179 8.438 9.133 19.183 11.82 32.238
            8.06-0.15-47.089-0.258-80.723-0.322-100.9-22.856 2.2879-52.73 5.5295-89.622 9.7251-14.172
            33.447-33.588 48.472-58.248 45.075z"
            strokeWidth={2}
            stroke="FFF"
            fill="#FFF"
            id="logoPath"
          />
        </svg>
      </div>
    </>
  );
}
