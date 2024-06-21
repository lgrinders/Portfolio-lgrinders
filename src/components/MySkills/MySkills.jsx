import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function MySkills() {
  const skillsArray = [
    <SiReact title="React"/>,
    <SiJavascript title="Javascript"/>,
    <SiTailwindcss title="TailwindCSS"/>,
    <SiFramer title="Framer Motion"/>,
    <SiHtml5 title="HTML"/>,
    <SiCss3 title="CSS"/>,
    <FaGithub title="Github"/>,
  ];

  return (
    <>
      <motion.div
        className="mt-5 flex w-full items-center justify-between gap-2 font-Syne font-bold xl:gap-5"
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
        <div className="text-xl">My Skills</div>
        <div className="flex justify-between gap-5 text-4xl xl:gap-5 xl:text-6xl">
          {skillsArray.map((logo, index) => {
            return <motion.div key={index}>{logo}</motion.div>;
          })}
        </div>
      </motion.div>
    </>
  );
}
