/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/purple-bg.jpg')",
        dark: "url('../public/dark-bg.jpg')",
      },
      fontFamily: {
        Syne: "'Syne'",
        DMMono: "'DM Mono'",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
