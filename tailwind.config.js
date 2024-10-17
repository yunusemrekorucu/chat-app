/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './app/screens.{js,jsx,ts,tsx}',
    './component/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000',
      },
    },
  },
  plugins: [],
};
