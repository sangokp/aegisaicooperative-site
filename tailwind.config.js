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
        accent: '#3b82f6',
        'accent-dark': '#2563eb',
        border: '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
