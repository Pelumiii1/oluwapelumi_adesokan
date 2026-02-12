/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1a17",
        sand: "#f5f1ea",
        clay: "#e7dfd3",
        moss: "#2d4f3a",
        copper: "#b56b3b",
        mist: "#f0ebe3",
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino", "Georgia", "serif"],
        sans: ["Trebuchet MS", "Verdana", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
