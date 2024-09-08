/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/game/**/*.tsx"],
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
