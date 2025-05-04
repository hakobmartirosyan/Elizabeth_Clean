/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
      width: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

