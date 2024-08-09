/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(152,114,157,1) 0%, rgba(102,98,103,1) 100%)',
      },
    },
  },
  plugins: [],
}

