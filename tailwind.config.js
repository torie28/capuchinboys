/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInScale': 'fadeInScale 0.6s ease-out',
        'spin-3d': 'spin 2s linear infinite',
        'bounce': 'bounce 2s infinite',
        'fadeIn3D': 'fadeIn3D 1s ease-out',
        'modal-appear': 'modal-appear 0.3s ease-out',
        '3d-wave': 'animate-3d-wave 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(30px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        spin: {
          '0%': { transform: 'perspective(100px) rotateX(45deg) rotate(0deg)' },
          '100%': { transform: 'perspective(100px) rotateX(45deg) rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn3D: {
          '0%': {
            opacity: '0',
            transform: 'perspective(1000px) rotateY(-90deg) rotateX(30deg) translateZ(-100px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'perspective(1000px) rotateY(-45deg) rotateX(15deg) translateZ(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
          },
        },
        'modal-appear': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'animate-3d-wave': {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)' },
          '25%': { transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg) translateZ(20px)' },
          '50%': { transform: 'perspective(1000px) rotateX(-10deg) rotateY(-5deg) translateZ(10px)' },
          '75%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(3deg) translateZ(15px)' },
          '100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)' },
        },
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gallery-card': {
          'transform-style': 'preserve-3d',
          'transition': 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          '&:hover': {
            'transform': 'perspective(1000px) rotateY(8deg) rotateX(4deg) translateZ(20px)',
          },
        },
        '.transform-gpu': {
          'transform': 'translateZ(0)',
        },
        '.translate-z-5': {
          'transform': 'translateZ(5px)',
        },
        '.translate-z-10': {
          'transform': 'translateZ(10px)',
        },
        '.translate-z-minus-5': {
          'transform': 'translateZ(-5px)',
        },
        '.translate-z-minus-10': {
          'transform': 'translateZ(-10px)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
