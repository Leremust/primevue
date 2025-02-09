/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
export default {
    darkMode: ['selector', '[class="p-dark"]'],
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/*/.{vue,js,ts,jsx,tsx}",
    ],
    plugins: [primeui],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
}