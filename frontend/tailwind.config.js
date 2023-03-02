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
        "primary-color-250": "rgba(255, 199, 89, 0.05)",
        "primary-color-300": "#FFC75940",
        "secondary-color": "#EDF7F6",
        "secondary-color-100": "#CFDBD5",
        "secondary-color-200": "#1546294d",
        "secondary-color-300": "#96BBA5",
        "secondary-color-400": "rgb(0,0,0,.51)",
        "secondary-color-500": "rgb(255,199,89,.25)",
        "gray-color": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
