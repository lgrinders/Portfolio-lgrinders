import TiltCard from "../../components/TiltCard/TiltCard";
import { SiTailwindcss, SiReact, SiFramer } from "react-icons/si";

export default function Projec() {
  return (
    <>
      <div className="flex min-h-screen w-screen items-center justify-center text-neutral-700 dark:text-neutral-500 xl:mt-0 mt-52"
      id="projects">
        <div className="flex max-w-[1100px] flex-col justify-center xl:gap-52 w-full p-5">
          <h2 className="font-Syne text-5xl font-bold">
            Some Things I've Built
          </h2>
          <TiltCard
            name={"Carmera"}
            image={"./public/CarmeraImage.png"}
            paragraph={
              "Carmera is a efficient and sleek website for car photography. Users can get extimates, view a photo gallery and get information about everything having to do with Carmera's services."
            }
            icons={[<SiTailwindcss />, <SiReact />].map((icon, index) => {
              return <div key={index}>{icon}</div>
            })}
            style1={"items-end"}
            style2={"xl:justify-end"}
            style3={"xl:-left-16"}
          />
          <TiltCard
            name={"WeatherIt"}
            image={"./public/WeatherItImage.png"}
            paragraph={
              "WeatherIt is a clean website that uses two apis working in conjunction to fetch location and weather data. It also has an animated svg in the background for a playfull look."
            }
            icons={[<SiTailwindcss />, <SiReact />, <SiFramer />].map((icon, index) => {
              return <div key={index}>{icon}</div>
            })}
            style1={"items-start"}
            style2={"xl:justify-start"}
            style3={"xl:-right-16"}
          />
        </div>
      </div>
    </>
  );
}
