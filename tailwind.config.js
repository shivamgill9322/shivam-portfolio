/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        ink: '#07111f',
        mist: '#8fa7c7',
        line: 'rgba(148, 163, 184, 0.18)',
      },
      boxShadow: {
        panel: '0 20px 60px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px rgba(96, 165, 250, 0.25), 0 24px 80px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(168, 85, 247, 0.18), transparent 30%), radial-gradient(circle at bottom, rgba(34, 211, 238, 0.14), transparent 32%)',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: 'translateY(0px)' },
          "50%": { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          "0%, 100%": { opacity: '0.45', transform: 'scale(1)' },
          "50%": { opacity: '0.8', transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
