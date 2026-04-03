/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a192f',
                accent: '#64ffda',
                slate: {
                    100: '#f8fafc',
                    200: '#f1f5f9',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                },
            },
        },
    },
    plugins: [],
}
