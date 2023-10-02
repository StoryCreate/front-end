/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B008B",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
