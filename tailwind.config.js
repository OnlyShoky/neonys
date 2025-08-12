/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#6b8cff',
        'primary-purple': '#a66bff',
        'light-purple': '#f0e8ff',
        'border-purple': '#d0c0ff',
        'text-gray': '#3a3a3a',
      },
    },
  },
  plugins: [],
}

