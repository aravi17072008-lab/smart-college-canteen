/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050912',
          900: '#0a1020',
          800: '#101a33',
          700: '#1a2547',
          600: '#243456',
        },
        brand: {
          50: '#ecfdff',
          100: '#cff7fe',
          200: '#a3eefc',
          300: '#67e0f8',
          400: '#22ccee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34,204,238,0.35)',
        'glow-green': '0 0 40px -10px rgba(16,185,129,0.35)',
        card: '0 10px 30px -12px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flowDash: {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s ease-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        flowDash: 'flowDash 1s linear infinite',
      },
    },
  },
  plugins: [],
};
