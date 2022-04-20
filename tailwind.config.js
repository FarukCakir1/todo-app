module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "112": "30rem"
      },
      height: {
        "112": "30rem"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
