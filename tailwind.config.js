/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Amiri"', 'serif'], // Or any Arabic font you prefer
      },
    },
  },
  plugins: [],
}

