/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/index.tsx", "./src/game/**/*.tsx", "./src/test_page/**/*.tsx"],
    theme: {
        extend: {
            spacing: {
                "game-height": "800px",
                "game-width": "800px",
                "large-btn-h": "64px",
                "large-btn-w": "320px",
                "medium-btn-h": "48px",
                "medium-btn-w": "240px",
                "small-btn-h": "32px",
                "small-btn-w": "160px",
                "flag-h": "320px",
                "answer-btn-h": "120px",
                "answer-btn-w": "240px",
                "category-btn-h": "80px",
                "category-btn-w": "320px",
                "center-h": "556px",
                "flagscreen-flag-h" : "400px",
                "flagscreen-h": "720px",
                "flagscreen-w": "880px",
            },
        },
    },
    plugins: [],
}
