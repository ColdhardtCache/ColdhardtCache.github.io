module.exports = {
  darkMode: 'class', // Use 'media' for OS-based dark mode or 'class' for manual control
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-dark': '#1f1f1f',
      },
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
}
