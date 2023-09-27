/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/*.liquid",
    "./layout/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
