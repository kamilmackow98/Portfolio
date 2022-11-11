module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
