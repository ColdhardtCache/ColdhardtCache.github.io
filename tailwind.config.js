module.exports = {
  darkMode: 'class', // Use 'media' for OS-based dark mode or 'class' for manual control
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#d1e0ff',
          200: '#adc2ff',
          300: '#80a0ff',
          400: '#5c85fa',
          500: '#3b82f6', // Main primary blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'secondary': {
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Main secondary purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'custom-dark': {
          lighter: '#1e293b',
          DEFAULT: '#111827', // Darker blue-gray
          darker: '#0f172a',
        },
      },
      backgroundColor: {
        'custom-dark': '#111827',
        'custom-dark-lighter': '#1e293b',
      },
      gradientColorStops: {
        'primary-start': '#3b82f6',
        'primary-end': '#8b5cf6',
      },
      borderColor: {
        'custom-dark': '#1e293b',
      },
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
}
