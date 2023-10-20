/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carnation: '#f25e5e',
        logCabin: '#1c241b',
        clayCreek:'#8A7F5C',
      },
      fontSize: {
        released: "1 rem", 
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

