// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-red': 'pulse-red 2s infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': {
            transform: 'scale(1)',
            backgroundColor: 'rgb(220, 38, 38)',
          },
          '50%': {
            transform: 'scale(1.05)',
            backgroundColor: 'rgb(185, 28, 28)',
          },
        },
      },
    }
  },
  plugins: [],
};
