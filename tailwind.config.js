/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
    './sections/**/*.{html,js,jsx,tsx}',
    './styles/**/*.{js,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-600': '#0876DD',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
