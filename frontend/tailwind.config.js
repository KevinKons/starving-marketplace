/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      spacing: {
        '368': '368px',
        '613': '613px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
