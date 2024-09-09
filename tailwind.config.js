/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/index.tsx", "./src/game/**/*.tsx"],
    theme: {
        extend: {
            spacing: {
                "game-width": "640px",
                "game-height": "800px",
                "title-screen-btn-w": "320px",
                "title-screen-btn-h": "64px",
                "normal-screen-btn-w": "240px",
                "normal-screen-btn-h": "48px",
            },
        },
    },
    plugins: [],
}
