import { useState, useRef } from "react";
import ContactMe from "./screens/ContactMe/ContactMe";
import Hero from "./screens/Hero/Hero";
import Info from "./screens/Info/Info";
import Projec from "./screens/Projec/Projec";
import Navigation from "./components/Navigation/Navigation";
import Line from "./components/Line/Line";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div
        className={
          darkMode
            ? "dark h-screen w-screen overflow-x-hidden"
            : "h-screen w-screen overflow-x-hidden"
        }
      >
        <Navigation
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        />
        <div ref={homeRef}>
          <Hero />
        </div>

        <div ref={aboutRef}>
          <Info />
        </div>

        <div ref={projectsRef}>
          <Projec />
        </div>

        <div ref={contactRef}>
          <ContactMe />
        </div>

        <Line />
        <div className="absolute top-0 -z-10 h-screen w-screen bg-hero blur-3xl dark:bg-dark dark:blur-none" />
      </div>
    </>
  );
}
