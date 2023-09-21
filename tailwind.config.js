/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      vsm: { min: "0px", max: "640px" },
    },
    extend: {
      fontFamily: {
        body: ["Playfair Display"],
        teko: ["Teko"],
      },
      backgroundImage: {
        judo: "url('judo.jpg')",
        plats: "url('plats.jpg')",
        vynile: "url('vynile.jpg')",
        dressing: "url('dressing.jpg')",
      },
    },
  },
  plugins: [],
};
