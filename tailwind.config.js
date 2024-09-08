/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/index.tsx", "./src/game/**/*.tsx"],
    theme: {
        extend: {
            spacing: {
                "game-width": "640px",
                "game-height": "800px",
                "screen-button-width": "320px",
                "screen-button-height": "64px",
            },
        },
    },
    plugins: [],
}
