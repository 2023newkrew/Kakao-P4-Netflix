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
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h4: {
          fontSize: theme('fontSize.md'),
          fontWeight: theme('fontWeight.semibold'),
        },
      });
    }),
  ],
};
