import { useState } from "react";
import AnimatedHamburger from "../AnimatedHamburger/AnimatedHamburgerButton";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

export default function Navigation({ darkMode, setDarkMode }) {
  const [active, setActive] = useState(false);

  const linkClasses =
    "bg-black/20 rounded-2xl py-1 px-2.5 hover:bg-black/50 dark:bg-white/20 dark:hover:bg-white/50 duration-200";

  const navLinks = [
    { title: "Home", href: "/#home" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <div className="absolute top-0 z-50 flex w-screen items-center justify-between px-10 py-5 font-Syne">
        <a href="" className="font-semibold text-white">
          Grinders.dev
        </a>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center gap-5">
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            <ul className="hidden gap-5 font-semibold text-white xl:flex">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} className={linkClasses}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="xl:hidden">
            <AnimatedHamburger active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </>
  );
}
