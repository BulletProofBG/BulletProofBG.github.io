/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        bebas: 'Bebas Neue'
      },
      backgroundImage:{
        "bg":"url('/assets/bg.jpg')"
      }
    },
  },
  plugins: [],
}

