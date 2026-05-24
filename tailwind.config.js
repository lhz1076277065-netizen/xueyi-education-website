/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8ECF1',
          100: '#C5CDD9',
          200: '#9EABB9',
          300: '#778899',
          400: '#5A6D7F',
          500: '#3D5266',
          600: '#2C4054',
          700: '#1F3143',
          800: '#142333',
          900: '#0A1628',
        },
        gold: {
          50: '#FBF6EE',
          100: '#F5E8D3',
          200: '#ECD1A8',
          300: '#E0B87D',
          400: '#D6A75C',
          500: '#C8963E',
          600: '#B88735',
          700: '#A0742E',
          800: '#886227',
          900: '#6E4E1D',
        },
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Microsoft YaHei',
          'Hiragino Sans GB',
          'WenQuanYi Micro Hei',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'PingFang SC',
          'Microsoft YaHei',
          'system-ui',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
