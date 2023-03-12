/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "universe-first": "url('./src/assets/iPhone14Pro.svg')"
      },
      width: {
        104: "104px"
      },
      height: {
        84: "84px"
      }
    }
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")]
};
