import ChangingImage from "../../components/ChangingImage/ChangingImage";
import MySkills from "../../components/MySkills/MySkills";

export default function Info() {
  return (
    <>
      <div
        className="flex min-h-screen w-screen items-center justify-center text-neutral-700 dark:text-neutral-500"
        id="about"
      >
        <div className="flex max-w-[1100px] flex-col items-center justify-center gap-10 p-5 xl:flex-row xl:gap-5">
          <div className="flex flex-col justify-center gap-10">
            <h2 className="font-Syne text-5xl font-bold">About</h2>
            <p className="font-DMMono text-lg xl:w-[700px]">
              As a passionate front-end developer, I thrive on creating websites
              that not only look stunning but also provide an exceptional user
              experience. My goal is to design engaging interfaces that drive
              customer interaction and deliver value to every party involved. I
              am committed to continuous learning and always eager to expand my
              skills and knowledge in the ever-evolving field of web
              development.
            </p>
            <div>
              <MySkills />
            </div>
          </div>
          <ChangingImage />
        </div>
      </div>
    </>
  );
}
