const colors = require('tailwindcss/colors');

module.exports = { 
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,svelte,ts}'
  ],
  theme: {
    extend: {
      // darkMode: 'class', 
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        gray: colors.neutral,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        orange: colors.orange,
        cyan: colors.cyan,
        lime: colors.lime,
        green: colors.green,
        indigo: colors.indigo,
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};