import { SiMaildotru } from "react-icons/si";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../../components/Button/Button";

export default function ContactMe() {
  return (
    <>
      <div
        className="flex w-screen flex-col items-center justify-center py-32 sm:py-64"
        id="contact"
      >
        <div className="flex w-full max-w-[1100px] flex-col gap-10 px-5">
          <h2 className="font-Syne text-5xl font-bold text-neutral-700 dark:text-neutral-500">
            Get In Contact
          </h2>
          <p className="font-DMMono text-lg dark:text-neutral-500">
            I'm currently looking for opportunities. A full time job is what I
            am most interested in. Send me a message and I will get back to you
            as soon as possible!
          </p>
          <div className="flex flex-col justify-center gap-5 font-Syne font-bold md:flex-row">
            <div className="flex flex-col items-center justify-center gap-3">
              <Button
                text={[<SiMaildotru />, "Email Me"].map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
                link={"mailto: landon.grinders@gmail.com"}
              />
              <h2 className="font-DMMono font-medium text-neutral-700 dark:text-neutral-500">
                landon.grinders@gmail.com
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <Button
                text={[<FaTwitter />, <FaXTwitter />, "DM Me"].map(
                  (item, index) => {
                    return <div key={index}>{item}</div>;
                  },
                )}
                link={"https://x.com/grindersdev"}
              />
              <h2 className="font-DMMono font-medium text-neutral-700 dark:text-neutral-500">
                @grinders.dev
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Button
                text={[<FaDiscord />, "Message Me"].map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              />
              <h2 className="font-DMMono font-medium text-neutral-700 dark:text-neutral-500">
                grindersdev
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
