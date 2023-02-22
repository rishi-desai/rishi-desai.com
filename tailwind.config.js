/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/*.{html,js,jsx}", "./components/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        chivomonoreg: ["Chivo Mono Regular", "monospace"],
        chivomonobold: ["Chivo Mono Bold", "monospace"],
      },
    },
  },
  plugins: [],
};
