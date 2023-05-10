/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'myblue1': '#146C94',
        'myblue2': '#19A7CE',
        'myblue3': '#AFD3E2',
        'mylight': '#F6F1F1',
      },
    },
  },
  plugins: [],
}

