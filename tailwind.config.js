/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                script: ['var(--font-script)', 'cursive'],
                sans: ['var(--font-sans)', 'sans-serif'],
                bodoni: ['var(--font-bodoni)', 'serif'],
            },
        },
    },
    plugins: [
        require("daisyui")
    ],
};
