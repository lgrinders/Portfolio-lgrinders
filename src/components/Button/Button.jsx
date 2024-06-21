export default function Button({ text, link }) {
  return (
    <>
      <a
        href={link} target="blank_"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black/20 w-52 h-16 font-Syne font-bold tracking-tighter text-white dark:bg-white/20"
      >
        <span className="absolute h-0 w-0 rounded-full bg-white/50 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>

        <span className="relative flex items-center gap-1">{text}</span>
      </a>
    </>
  );
}
