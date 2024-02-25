/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary_green: "hsl(75, 94%, 57%)",
        neutral_white: "hsl(0, 0%, 100%)",
        normal_grey: "hsl(0, 0%, 20%)",
        dark_grey: "hsl(0, 0%, 12%)",
        offblack: "hsl(0, 0%, 8%)"
      }
    },
  },
  plugins: [],
}

