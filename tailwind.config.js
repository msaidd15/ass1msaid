/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '220': '77.5rem',
        '60':'25rem',
        '104':'26',
      },
      height: {
        '26': '6.5rem',
        '212':'53rem'
      },
      fontFamily:{
        Poppins:['Poppins'],
        Raleway:['Raleway'],
      }
      
    }
  }
}