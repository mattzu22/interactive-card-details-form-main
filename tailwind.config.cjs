/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgMobile: "url('/src/images/bg-main-mobile.png')",
        bgDesktop: "url('/src/images/bg-main-desktop.png')",
        cardLogo: "url('/src/images/card-logo.svg')",
        iconComplete: "url('/src/images/icon-complete.svg')",
      },
      fontFamily:{
        primary: 'Space Grotesk, sans-serif'
      },
      colors:{
        grey: 'hsl(279, 6%, 55%)',
        violet: 'hsl(278, 68%, 11%)'
      },
    },
  },
  plugins: [],
};
