const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{astro,js,svelte,ts}'
  ],
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      orange: colors.orange,
      cyan: colors.cyan,
      lime: colors.lime,
      green: colors.green,
      indigo: colors.indigo,
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};