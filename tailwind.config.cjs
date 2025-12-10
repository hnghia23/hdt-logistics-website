/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                hdtDark: '#0b3a1d',
                hdtGreen: '#3fae49',
                hdtLight: '#7cd4b8',
                hdtAqua: '#3cb7c4'
            }
        },
    },
    plugins: [],
};