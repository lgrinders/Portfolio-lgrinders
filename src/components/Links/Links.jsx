import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Links() {
  return (
    <>
      <motion.div
        className="flex gap-5 pt-5 text-5xl"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <a href="https://github.com/lgrinders" target="blank_">
          <FaGithubSquare />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </motion.div>
    </>
  );
}
