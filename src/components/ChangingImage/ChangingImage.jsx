import { motion } from "framer-motion";

export default function ChangingImage() {
  return (
    <>
      <motion.div
        className="h-80 w-80 overflow-hidden rounded-full"
        animate={{
          borderRadius: ["48%", "50%", "48%"],
          y: [10, 0, 10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="me.png" alt="Me" />
      </motion.div>
    </>
  );
}
