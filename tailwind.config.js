const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: "'Barlow Semi Condensed', sans-serif",
      },
      textColor: {
        skin: {
          dark: 'hsl(229, 25%, 31%)',
          score: 'hsl(229, 64%, 46%)',
          header: 'hsl(217, 16%, 45%)',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
