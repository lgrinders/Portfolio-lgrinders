import { MotionConfig, motion, AnimatePresence } from "framer-motion";

export default function AnimatedHamburger({ active, setActive }) {
  const navClasses =
    "text-5xl font-bold text-neutral-700 hover:text-neutral-200 dark:text-white dark:hover:text-neutral-500 rounded-full py-2 duration-300 flex justify-center px-5";

  const navLinks = [
    { title: "Home", href: "#home", className: navClasses },
    { title: "About", href: "#about", className: navClasses },
    { title: "Projects", href: "#projects", className: navClasses },
    { title: "Contact", href: "#contact", className: navClasses },
  ];

  const bigSquareMenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        aria-label="navigation toggle"
        className={`relative z-50 h-10 w-10 rounded-full ${
          active ? null : "hover:bg-black/20"
        } transition-colors`}
        onClick={() => {
          setActive(!active);
        }}
        animate={active ? "open" : "closed"}
        initial={false}
      >
        <motion.span
          className="absolute z-50 h-0.5 w-5 bg-white"
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-5 bg-white"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-2.5 bg-white"
          style={{
            left: "calc(50% + 5px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              left: "50%",
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              left: "calc(50% + 5px)",
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed right-0 top-0 flex h-screen w-screen origin-top items-center justify-center bg-black/20 backdrop-blur"
            variants={bigSquareMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, index) => {
                return (
                  <div className="overflow-hidden" key={index}>
                    <motion.div
                      className={link.className}
                      variants={mobileLinkVars}
                      animate="animate"
                      initial="initial"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      <a href={link.href}>{link.title}</a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
