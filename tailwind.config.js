/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        "header":"10px 0px 10px 3px #78B3CE",
        "button":
          "5px 5px 10px 0px #F96E2A"+
          "-5px -5px 10px 0px #F96E2A"+
          "5px -5px 10px 0px #F96E2A"+
          "-5px 5px 10px 0px #F96E2A",
        "modal":"6px 6px 10px 3px #525151",
        "input":
        "1px 1px 0px 4px #F96E2A,"+
        "-1px -1px 0px 4px #F96E2A,"+
        "1px -1px 0px 4px #F96E2A,"+
        "-1px 1px 0px 4px #F96E2A"
        
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

