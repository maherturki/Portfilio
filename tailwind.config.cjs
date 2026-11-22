/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--background)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--surface-raised)",
        "black-100": "var(--surface)",
        "black-200": "var(--background)",
        "white-100": "var(--text-primary)",
        accent: "var(--accent)",
      },
      boxShadow: {
        card: "0 24px 70px -32px rgba(0, 0, 0, .55)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
