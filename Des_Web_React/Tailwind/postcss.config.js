// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-import'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*.html']
        }),
    ]
}