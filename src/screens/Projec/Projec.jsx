import TiltCard from "../../components/TiltCard/TiltCard";
import { SiTailwindcss, SiReact, SiFramer, SiCss3 } from "react-icons/si";

export default function Projec() {
  return (
    <>
      <div
        className="mt-52 flex min-h-screen w-screen items-center justify-center text-neutral-700 dark:text-neutral-500 xl:mt-0"
        id="projects"
      >
        <div className="flex w-full max-w-[1100px] flex-col justify-center px-5 xl:gap-52">
          <h2 className="font-Syne text-5xl font-bold">
            Some Things I've Built
          </h2>
          <TiltCard
            name={"Sunday Salad"}
            image={"./public/Sunday Salad image.jpg"}
            paragraph={
              "Sunday Salad is a clean and user-friendly recipe search website. It lets you search an ingredient and it will return with recipes that you can make. When you find a recipe that you like you are able to favorite for use at another time."
            }
            icons={[
              <SiTailwindcss title="TailwindCSS" />,
              <SiReact title="React" />,
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-start"}
            style2={"xl:justify-start"}
            style3={"xl:-right-16"}
            link1={"https://lgrinders.github.io/RecipeApp-Sunday-Salad/"}
            altText={"Sunday Salad overview"}
          />
          <TiltCard
            name={"Amazon Clone"}
            image={"./public/Amazon Clone image.jpg"}
            paragraph={
              "This is a website I built to closely resemble the Amazon desktop home page. It features all of the dropdowns, sidebars, image carosels and product sliders that are a part of the Amazon home page."
            }
            icons={[
              <SiTailwindcss title="Tailwind" />,
              <SiReact title="React" />,
              <SiCss3 title="CSS" />,
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-end"}
            style2={"xl:justify-end"}
            style3={"xl:-left-16"}
            link1={"https://github.com/lgrinders/AmazonClone"}
            altText={"AmazonClone overview"}
          />
          <TiltCard
            name={"Trending"}
            image={"./public/Trending image.jpg"}
            paragraph={
              "WeatherIt is a clean website that uses two apis working in conjunction to fetch location and weather data. It also has an animated svg in the background for a playfull look."
            }
            icons={[
              <SiTailwindcss title="TailwindCSS" />,
              <SiReact title="React" />,
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-start"}
            style2={"xl:justify-start"}
            style3={"xl:-right-16"}
            link1={"https://lgrinders.github.io/Ecommerce-Trending/"}
            altText={"Trending overview"}
          />

          <TiltCard
            name={"Carmera"}
            image={"./public/Carmera image.jpg"}
            paragraph={
              "Carmera is a efficient and sleek website for car photography. Users can get extimates, view a photo gallery and get information about everything having to do with Carmera's services."
            }
            icons={[
              <SiTailwindcss title="Tailwind" />,
              <SiReact title="React" />,
              <SiCss3 title="CSS" />,
            ].map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
            style1={"items-end"}
            style2={"xl:justify-end"}
            style3={"xl:-left-16"}
            link1={"https://lgrinders.github.io/Small-Business-Carmera/"}
            altText={"Carmera overview"}
          />
          <TiltCard
            name={"WeatherIt"}
            image={"./public/WeatherIt image.jpg"}
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
            link1={"https://lgrinders.github.io/WeatherApp-WeatherIt/"}
            altText={"WeatherIt overview"}
          />
        </div>
      </div>
    </>
  );
}
