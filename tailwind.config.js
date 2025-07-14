/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' based on preference
  theme: {
    extend: {
      colors: {
        primary: '#49BBBD', // Main accent color
        'primary-light': '#65DAFF',
        'primary-dark': '#2F327D',
        secondary: '#F48C06', // A secondary accent
        light: '#FFFFFF', // Light mode background
        dark: '#010514', // Dark mode background
        'text-light': '#252641', // Light mode text
        'text-dark': '#FFFFFF', // Dark mode text
        'text-muted-light': '#696984', // Light mode muted text
        'text-muted-dark': '#B2B3CF', // Dark mode muted text
        'border-light': '#EAEAEA',
        'border-dark': '#2D3436',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
