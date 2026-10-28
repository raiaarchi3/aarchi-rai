/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
};