/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F0',
        surface: '#FFFFFF',
        muted: '#FFF0E6',
        foreground: '#1A1A1A',
        'foreground-muted': '#5C5244',
        accent: '#8B6F47',
        'accent-dark': '#6B5535',
        border: 'rgba(139, 111, 71, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
