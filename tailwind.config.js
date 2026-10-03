/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f4f5f8',
          sidebar: '#16171c',
          sidebarHover: '#22242b',
          orange: '#ff6b00',
          orangeHover: '#e65c00',
          green: '#10b981',
          cyan: '#0284c7',
          card: '#ffffff',
          border: '#e2e8f0',
        },
      },
      boxShadow: {
        'fox-orange': '0 4px 14px 0 rgba(255, 107, 0, 0.35)',
        'mockup-card': '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
