/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "serif"],
            },
            screens: {
                lg: "1100px", // Altera o breakpoint 'lg' para 1200px
            },
        },
    },
    plugins: [],
};
