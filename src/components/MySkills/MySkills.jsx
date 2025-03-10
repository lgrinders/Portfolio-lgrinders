import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function MySkills() {
  const skillsArray = [
    <SiReact title="React" />,
    <SiJavascript title="Javascript" />,
    <SiTypescript title="Typescript" />,
    <SiNextdotjs title="NextJS" />,
    <SiTailwindcss title="TailwindCSS" />,
    <SiHtml5 title="HTML" />,
    <SiCss3 title="CSS" />,
  ];

  return (
    <>
      <motion.div
        className="mt-5 flex w-full items-center gap-10 font-Syne font-bold xl:gap-5"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: [0, 1],
          y: [50, 0],
        }}
        transition={{
          duration: 1.8,
          ease: "anticipate",
          type: "tween",
        }}
      >
        <div className="text-lg sm:text-xl">My Skills</div>
        <div className="flex justify-evenly gap-2 text-3xl sm:gap-5 xl:gap-5 xl:text-6xl">
          {skillsArray.map((logo, index) => {
            return <motion.div key={index}>{logo}</motion.div>;
          })}
        </div>
      </motion.div>
    </>
  );
}
