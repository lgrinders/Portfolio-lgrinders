import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function InfoSelector() {
  return (
    <>
      <SlideTabs />
    </>
  );
}

const SlideTabs = () => {
  const [positon, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul className="relative flex justify-evenly rounded-xl bg-black/50 p-3">
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={positon} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacty: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 flex w-1/2 cursor-pointer justify-center px-3 py-1.5 font-Syne font-bold uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 w-36 rounded-lg bg-white md:h-12"
    ></motion.li>
  );
};
