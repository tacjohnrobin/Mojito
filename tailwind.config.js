/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modern-negra': ['"Modern Negra"', 'sans-serif'],
        'sans': ['"Mona Sans"', 'sans-serif'],
        'serif': ['"DM Serif Text"', 'serif'],
      },
      colors: {
        'yellow': '#e7d393',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        '1': '1px',
      },
      maxWidth: {
        '2xs': '16rem',
      },
    },
  },
  plugins: [],
};
