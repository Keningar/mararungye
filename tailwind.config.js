const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  variants: {},
  theme: {
    extend: {
      colors: {
        stone: colors.stone,
        teal: colors.teal,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
    require("daisyui"),
  ],
  daisyui: {
    prefix: "dai-",
    themes: ["light", "dark"],
  },
};
