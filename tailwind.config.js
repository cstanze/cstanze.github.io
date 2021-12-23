module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
