/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: '#FAF7F2',
        cafe: '#2D241E',
        carvalho: '#7D5A50',
        musgo: '#4A6741',
        pergaminho: '#E2D1C3',
        argila: '#A65D50',
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;