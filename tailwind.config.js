/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#282828",
        gray2: "#28282880",
        lightBlue: "#EDF6FF",
      },
    },
  },
  plugins: [],
};
