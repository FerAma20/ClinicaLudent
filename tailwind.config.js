/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
      backgroundImage: {
        hero1: "url(src/assets/images/hero1.jpg)",
        hero2: "url(src/assets/images/hero2.jpg)",
        hero3: "url(src/assets/images/hero3.jpg)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
