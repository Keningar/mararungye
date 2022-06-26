const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
  plugins: [require("@tailwindcss/forms")],
};
