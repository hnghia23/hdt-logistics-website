/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hdtDark: '#1e3a8a',
        hdtBlue: '#3b82f6',
        hdtLight: '#93c5fd',
        hdtAqua: '#60a5fa'
      }
    },
  },
  plugins: [],

  fontFamily: {
  sans: ['Manrope', 'system-ui', 'sans-serif'],
}
}

