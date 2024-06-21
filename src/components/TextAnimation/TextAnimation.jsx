import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "../Links/Links";

export default function TextAnimation() {
  const [hasPlayed, setHasPlayed] = useState(false);

  const heading = "Hi, I'm a Front End React Developer";
  const description =
    "My name is Landon Grinderslev and, I am a passionate Developer based right outside of Nashville, Tennessee.";

  const headingChars = heading.split("");
  const descriptionChars = description.split("");

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasPlayed(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center text-neutral-700 dark:text-white w-screen dark:mix-blend-difference">
      {!hasPlayed ? (
        <>
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.04 }}
            className="w-full max-w-[500px] pb-2 px-5 font-Syne text-5xl font-bold"
            variants={charVariants}
          >
            {headingChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.01 }}
            className="w-full max-w-[500px] px-5 font-DMMono text-lg"
          >
            {descriptionChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.35 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </>
      ) : (
        <>
          <h1 className="w-full max-w-[500px] px-5 pb-2 text-5xl font-Syne font-bold">
            {heading}
          </h1>
          <p className="w-full max-w-[500px] px-5 font-DMMono text-lg">
            {description}
          </p>
        </>
      )}
      <Links />
    </div>
  );
}
