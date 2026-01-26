/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-archivo)', 'sans-serif'],
            },
        },
    },
    plugins: [
        require("daisyui")
    ],
};
