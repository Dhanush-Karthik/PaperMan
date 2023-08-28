/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom: [
        "Trebuchet MS",
        "Lucida Sans Unicode",
        "Lucida Grande",
        "Lucida Sans",
      ],
    },
    extend: {
      colors: {
        purpleCustom: "#52489C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
