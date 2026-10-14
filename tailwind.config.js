/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#B91C1C',
          green: '#14532D',
          gold: '#D97706',
          cream: '#FAF8F5'
        }
      }
    },
  },
  plugins: [],
}
