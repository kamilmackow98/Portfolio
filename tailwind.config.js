const { screens, fontSize } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '7.5xl': [
        '5.25rem',
        {
          lineHeight: 1,
        },
      ],
      '7.75xl': [
        '5.625rem',
        {
          lineHeight: 1,
        },
      ],
      ...fontSize,
    },
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
    extend: {
      colors: {
        primary: '#ffcc66',
        secondary: '#80d4ff',
        default: '#7a8ba9',
      },
      padding: {
        6.5: '1.625rem',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        // xs: '?',
        sm: '2rem',
        md: '6rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [],
}
