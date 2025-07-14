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
        dark: '#121212', // A deeper, more neutral dark
        'text-light': '#252641', // Light mode text
        'text-dark': '#EAEAEA', // Slightly off-white for better readability
        'text-muted-light': '#696984', // Light mode muted text
        'text-muted-dark': '#A0A0A0', // A lighter gray for muted text in dark mode
        'border-light': '#EAEAEA',
        'border-dark': '#272727', // A subtle border color for dark mode
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
