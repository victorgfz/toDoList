/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asteroid-300': '#0F2027',
        'asteroid-200': '#203A43',
        'asteroid-100': '#2C5364'
      }
    },
  },
  plugins: [],
}