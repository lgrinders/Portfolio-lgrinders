import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function MySkills() {
  const skillsArray = [
    <SiReact />,
    <SiJavascript />,
    <SiTailwindcss />,
    <SiFramer />,
    <SiHtml5 />,
    <SiCss3 />,
  ];

  return (
    <>
      <motion.div
        className="mt-5 flex w-full items-center justify-between xl:gap-5 gap-2 font-Syne font-bold"
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
        <div className="text-xl w-1/3">My Skills</div>
        <div className="flex justify-evenly w-2/3 xl:gap-4 gap-1 xl:text-5xl text-4xl">
          {skillsArray.map((logo, index) => {
            return <motion.div
            key={index}
            >{logo}</motion.div>;
          })}
        </div>
      </motion.div>
    </>
  );
}
