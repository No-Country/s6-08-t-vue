/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#353531",
        "primary-color-100": "#60D394",
        "primary-color-200": "#FFC759",
        "primary-color-300": "#FFC759bf",
        "secondary-color": "#EDF7F6",
        "secondary-color-100": "#CFDBD5",
        "secondary-color-200": "#1546294d",
        "secondary-color-300": "#96BBA5",
        "gray-color": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
