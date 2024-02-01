/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "poppins" : ['Poppins', 'sans-serif'],
      "inter": ['Inter', 'sans-serif'],
      "jakarta": ['Plus Jakarta Sans', 'sans-serif']
    },
    colors: {
      "custom-orange": "#F29025",
      "custom-grey": "#F2F2F261",
      "custom-blue": "#001E75",
      "white": "#ffffff",
    },
    extend: {},
  },
  plugins: [],
}
