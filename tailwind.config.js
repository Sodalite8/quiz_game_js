/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,tsx}", "./public/**/*.html"],
    theme: {
        extend: {
            spacing: {
                "game-width": "640px",
                "game-height": "800px",
                "screen-button-width": "160px",
                "screen-button-height": "40px",
            },
        },
    },
    plugins: [],
}
