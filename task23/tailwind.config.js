/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#4ADE80",
          DEFAULT: "#22C55E",
          dark: "#166534",
        },
        accent: {
          light: "#FDE047",
          DEFAULT: "#FACC15",
          dark: "#CA8A04",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        heading: ['"Merriweather"', "serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        "4xl": "2rem",
        pill: "50rem",
      },
      boxShadow: {
        glow: "0 4px 10px rgba(255, 255, 0, 0.6)",
        deep: "0 8px 20px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
