/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      deepGreen: '#a5d6a7',
      lightGreen: '#dcedc8',
      deepGray: '#B4B4B4',
      lightGray: '#D9D9D9',
      bgColor: '#FDFDFD',
      purple: '#E1BEE7',
      blue: '#61DAFB',
    },
    screens: {
      min: '530px', // @media screen and (min-width: 530px)
    },
  },
  plugins: [],
};
