/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: false,
  theme: {
    colors: {
      primary: "#20c9a4",

      secondary: "#f9f289",

      accent: "#def7a3",

      neutral: "#27222F",

      base: "#EBEFF4",

      info: "#A0B6EE",

      success: "#2ACB72",

      warning: "#F7B02B",

      error: "#E75A89",

      glass: "rgba( 255, 255, 255, 0.25 );",
    },
    backgroundImage: {
      night:
        "linear-gradient(180deg, rgba(2,0,36,1) 10%, rgba(9,9,121,1) 82%, rgba(0,212,255,1) 100%);",
    },
    height: {
      full: "100vh",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
