import TiltCard from "../../components/TiltCard/TiltCard";
import { SiTailwindcss, SiReact, SiFramer, SiCss3 } from "react-icons/si";

export default function Projec() {
  return (
    <>
      <div
        className="mt-52 flex min-h-screen w-screen items-center justify-center text-neutral-700 dark:text-neutral-500 xl:mt-0"
        id="projects"
      >
        <div className="flex w-full max-w-[1100px] flex-col justify-center p-5 xl:gap-52">
          <h2 className="font-Syne text-5xl font-bold">
            Some Things I've Built
          </h2>
          <TiltCard
            name={"Carmera"}
            image={"./public/CarmeraImage.png"}
            paragraph={
              "Carmera is a efficient and sleek website for car photography. Users can get extimates, view a photo gallery and get information about everything having to do with Carmera's services."
            }
            icons={[
              <SiTailwindcss title="Tailwind" />,
              <SiReact title="React" />,
              <SiCss3 title="CSS"/>
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-end"}
            style2={"xl:justify-end"}
            style3={"xl:-left-16"}
            link1={"https://github.com/lgrinders/Carmera"}
            altText={"Carmera website front page"}
          />
          <TiltCard
            name={"WeatherIt"}
            image={"./public/WeatherItImage.png"}
            paragraph={
              "WeatherIt is a clean website that uses two apis working in conjunction to fetch location and weather data. It also has an animated svg in the background for a playfull look."
            }
            icons={[
              <SiTailwindcss title="TailwindCSS" />,
              <SiReact title="React" />,
              <SiFramer title="Framer Motion" />,
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-start"}
            style2={"xl:justify-start"}
            style3={"xl:-right-16"}
            link1={"https://github.com/lgrinders/WeatherIt"}
            altText={"WeatherIt website front page"}
          />
        </div>
      </div>
    </>
  );
}
