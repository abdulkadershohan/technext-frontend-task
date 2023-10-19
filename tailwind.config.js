/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Barlow: ["Barlow", "sans-serif"],
    },
    colors: {
      "main": "#FFF",
      "body": "#212529",
      "text": "#495057",
      "danger": "#DC3545",
      "success": "#198754",
      "gray-300": "#DEE2E6",
      "gray-400": "#CED4DA",
      "gray-600": "#6C757D",
      "gray-700": "#495057",
      "gray-800": "#343A40",
      "gray-900": "#212529",
      'primary': '#0D6EFD',
    }
  },
  plugins: [],
}

