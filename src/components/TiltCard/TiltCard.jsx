import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function TiltCard({
  paragraph,
  image,
  name,
  icons,
  style1,
  style2,
  style3,
  link1,
  link2,
  altText,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const mainDivRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!mainDivRef.current) return;

    const rect = mainDivRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        ref={mainDivRef}
        className={`relative m-auto mt-10 flex w-full flex-col items-center justify-center xl:flex-row ${style2}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{
          scale: 0.75,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className="z-10 mb-5 block font-Syne text-4xl font-bold text-white xl:hidden">
          {name}
        </h2>
        <div
          className={`flex flex-col items-center justify-center ${style1}`}
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="mb-5 hidden font-Syne text-4xl font-bold text-white xl:block">
            {name}
          </h2>
          <div className="flex max-h-72 max-w-96 flex-col justify-between gap-5 rounded-3xl bg-black/50 p-5 sm:h-[500px] sm:max-w-[600px] xl:h-96 xl:w-96">
            <p className="font-DMMono text-white">{paragraph}</p>
            <div className="flex items-center justify-center gap-2 text-4xl text-white">
              <a
                href={link1}
                target="blank_"
                className="duration-200 hover:text-white/50"
              >
                <FaGithub title="Github" />
              </a>
              <a
                href={link2}
                target="blank_"
                className="duration-200 hover:text-white/50"
              >
                <FaLink title="Website Link" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`xl:absolute ${style3} mt-5 flex max-w-96 flex-col items-center justify-center gap-2 rounded-3xl bg-white/20 p-4 dark:bg-white/20 sm:max-w-[600px] xl:-top-36 xl:max-w-[800px]`}
        >
          <img src={image} alt={altText} className="rounded-2xl" />
          <div className="flex gap-2 p-2 text-4xl text-neutral-700 dark:text-white">
            {icons}
          </div>
        </div>
      </motion.div>
    </>
  );
}
