module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        archivo: "'Archivo', sans-serif",
        poppins: "'Poppins', sans-serif",
        monster: "'Montserrat', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
