module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      stroke: ['hover', 'focus'],
    },
  },
  plugins: [],
}
