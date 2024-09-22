/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        'move-left-right': {
          '0%': { transform: 'translateX(-100%)' },
          '-100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'move-left-right': 'move-left-right 10s linear infinite',
      },
    },
  },
  plugins: [],
}

