module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    letterSpacing: {
      tight: '-.15em'
    },
    extend: {
      color: {
        primary: '#202225',
        secondary: '#5865f2',
      },
      height: {
        'half-screen': "50vh"
      }
    },
  },
  plugins: [],
}
