/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            "./node_modules/flowbite/**/*.js"
],
safelist: [
  'w-64',
  'w-1/2',
  'rounded-l-lg',
  'rounded-r-lg',
  'bg-gray-200',
  'grid-cols-4',
  'grid-cols-7',
  'h-6',
  'leading-6',
  'h-9',
  'leading-9',
  'shadow-lg'
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
