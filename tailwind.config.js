const { screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '420px',
      xs: '480px',
      ...screens,
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
    extend: {},
    container: {
      padding: {
        // DEFAULT: '1rem',
        // xs: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '2rem',
        xl: '1rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [],
};
