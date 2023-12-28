/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "header": "45px",
        "homeHero": "500px"
      },
      backgroundColor: {
        "header": "#4c3398",
      },
      width: {
        "1232": "1232px"
      }

    },
  },
  plugins: [],
}

