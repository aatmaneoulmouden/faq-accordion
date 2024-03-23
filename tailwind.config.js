/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
      }
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "light-pink": "hsl(275, 100%, 97%)",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
    },
    boxShadow: {
      "main": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

