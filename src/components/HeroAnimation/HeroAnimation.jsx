import { useState } from "react";
import LogoAnimation from "../LogoAnimation/LogoAnimation";
import TextAnimation from "../TextAnimation/TextAnimation";

export default function HeroAnimation() {
  const [animationOver, setAnimationOver] = useState(false);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center relative"
      id="home"
      >
        <LogoAnimation setAnimationOver={setAnimationOver} />
        {animationOver && <TextAnimation />}
      </div>
    </>
  );
}
