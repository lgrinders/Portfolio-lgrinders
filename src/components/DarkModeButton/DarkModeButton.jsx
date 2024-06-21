import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DarkModeButton({ darkMode, setDarkMode }) {
  const [isOn, setIsOn] = useState(darkMode);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const toggleSwitch = () => {
    const newDarkMode = !darkMode;
    setIsOn(!isOn);
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    setIsOn(savedDarkMode);
  }, [setDarkMode])

  return (
    <div
      className="relative flex h-6 w-10 items-center cursor-pointer"
      onClick={(e) => {
        setDarkMode(!darkMode);
        toggleSwitch();
      }}
    >
      <motion.div
        className={`relative flex h-full w-full items-center rounded-3xl p-1 ${
          darkMode ? "bg-white/20" : "bg-black/20"
        }`}
        style={{ justifyContent: isOn ? "flex-start" : "flex-end" }}
        transition={spring}
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-white"
          layout
          transition={spring}
        />
      </motion.div>
    </div>
  );
}
