import { useState } from "react";
import ContactMe from "./screens/ContactMe/ContactMe";
import Hero from "./screens/Hero/Hero";
import Info from "./screens/Info/Info";
import Projec from "./screens/Projec/Projec";
import Navigation from "./components/Navigation/Navigation"
import Line from "./components/Line/Line";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <>
      <div className={darkMode ? "h-screen w-screen overflow-x-hidden dark" : "h-screen w-screen overflow-x-hidden"}
      >
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Hero />
        <Info />
        <Projec />
        <ContactMe />
        <Line />
        <div className="absolute top-0 -z-10 h-screen w-screen bg-hero dark:bg-dark blur-3xl dark:blur-none" />
      </div>
    </>
  );
}
