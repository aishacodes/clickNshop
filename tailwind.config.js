/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#043E7D",
        gray1: "#282828",
        gray2: "#28282880",
        gray3: "#7E7D7D",
        gray4: "#75757A",
        lightBlue: "#EDF6FF",
      },
    },
  },
  plugins: [],
};
