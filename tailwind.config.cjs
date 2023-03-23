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
        mobile: "url('/src/images/bg-main-mobile.png')",
        desktop: "url('/src/images/bg-main-desktop.png')"
      },
      screens:{
        
      }
    },
  },
  plugins: [],
};
