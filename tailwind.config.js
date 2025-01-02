/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      'md': '1024px', // Cambia el tamaño del breakpoint
    },
},
  },
  plugins: [],
}