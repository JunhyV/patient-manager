/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      height: {
        '100': '32rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}