/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#5d3ebc",
        formButtonColor: "#5d3ebc",
        hoverFormButtonColor: "#ffe430"
      },
      height: {
        "header": "45px",
        "homeHero": "500px",
        "formButton": "48px"
      },
      backgroundColor: {
        "header": "#4c3398",
        "formButton": "#ffd300",
        "hoverFormButton": "#7849f7"
      },
      width: {
        "1232": "1232px",
        "card": "400px",
        "1/10": "10%"
      },
      borderColor: {
        input: "#dfdee2",
        hoverInput: "#7849f7"
      },
      boxShadow: {
        cardShadow: "0px 6px 24px rgba(93, 62, 188, 0.04)"
      }


    },
  },
  plugins: [],
}

