/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'charcoal': '#1a1a1a',
        'dark-navy': '#0f172a',
        'japanese-red': '#dc2626',
        'sakura-pink': '#fbcfe8',
        'light-gray': '#f3f4f6',
        'off-white': '#fafafa',
      },
    },
  },
  plugins: [],
}
