/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/index.tsx", "./src/game/**/*.tsx", "./src/test_page/**/*.tsx"],
    theme: {
        extend: {
            spacing: {
                "game-width": "800px",
                "game-height": "800px",
                "large-btn-w": "320px",
                "large-btn-h": "64px",
                "medium-btn-w": "240px",
                "medium-btn-h": "48px",
                "small-btn-w": "160px",
                "small-btn-h": "32px",
                "flag-h": "320px",
                "answer-btn-w": "240px",
                "answer-btn-h": "120px",
            },
        },
    },
    plugins: [],
}
