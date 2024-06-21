import { SiMaildotru } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../../components/Button/Button";

export default function ContactMe() {
  return (
    <>
      <div
        className="flex h-screen w-screen flex-col items-center justify-center"
        id="contact"
      >
        <div className="flex w-full max-w-[1100px] flex-col gap-5 p-5">
          <h2 className="font-Syne text-5xl font-bold text-neutral-700 dark:text-neutral-500">
            Get In Contact
          </h2>
          <p className="font-DMMono text-lg dark:text-neutral-500">
            I'm currently looking for opportunities. A full time job is what I
            am most interested in. Send me a message and I will get back to you
            very soon!
          </p>
          <div className="flex justify-center gap-5 font-Syne font-bold">
            <Button
              text={[<SiMaildotru />, "Email Me"].map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            />
            <Button
              text={[<FaTwitter />, "DM Me"].map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
