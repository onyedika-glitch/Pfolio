/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A8A',
        'navy-dark': '#0F172A',
        blue: {
          DEFAULT: '#3B82F6',
        },
        bg: '#F8FAFC',
        grey: '#F1F5F9',
        text: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
        teal: '#0D9488',
        'teal-light': '#14B8A6',
        indigo: '#4F46E5',
        'indigo-light': '#6366F1',
        amber: '#D97706',
        'amber-light': '#F59E0B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      letterSpacing: {
        tight: '-0.04em',
        tighter: '-0.05em',
      },
    },
  },
  plugins: [],
}
