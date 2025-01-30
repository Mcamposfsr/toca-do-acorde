/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        "header":"10px 0px 5px 3px #C9E6F0",
        "button":
          "5px 5px 10px 0px #F96E2A,"+
          "-5px -5px 10px 0px #F96E2A,"+
          "5px -5px 10px 0px #F96E2A,"+
          "-5px 5px 10px 0px #F96E2A"
},
      fontFamily:{
        "nautigal":["The Nautigal","serif"],
        "roboto":["Roboto", "serif"],

      },
      colors:{
        "azulClaro":"#78B3CE",
        "azulCeu":"#dbecf5",
        "branco":"#FBF8EF",
        "laranja":"#F96E2A",
        "texto":"#5c5b5b"
      }

    },
  },
  plugins: [],
}

