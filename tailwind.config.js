/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0b',
        surface: '#111113',
        muted: '#18181b',
        foreground: '#fafafa',
        'foreground-muted': '#a1a1aa',
        accent: '#FF7E5F',
        'accent-dark': '#e86a4d',
        border: '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
