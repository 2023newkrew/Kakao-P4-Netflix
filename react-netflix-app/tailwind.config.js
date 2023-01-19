const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        netflix: '#e50914',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: 32,
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: 28,
          fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
          fontSize: 24,
          fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
          fontSize: 20,
          fontWeight: theme('fontWeight.semibold'),
        },
        input: {
          outlineWidth: 0,
        },
      });
    }),
  ],
};
