/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'kuning-osis': '0 0 50px rgba(253, 224, 71, 0.4)',
        'biru-mpk': '0 0 50px rgba(147, 197, 253, 0.4)',
        'kuning-lampu': '0 0 20px rgba(253, 224, 71, 1)',
        'merah-penus-bayangan': '0 0 15px rgba(211, 39, 16, 0.4)',
        'putih-cahaya': '0 0 5px rgba(255, 255, 255, 0.4)',
        'putih-cahaya-besar': '0 0 20px rgba(255, 255, 255, 0.4)',
        'putih-cahaya-besar-besar': '0 12px 15px rgba(255, 255, 255, 0.8)',
      },
      boxShadow: {
        'osis': '0 0 25px rgba(253, 224, 71, 0.4)',
        'mpk': '0 0 25px rgba(147, 197, 253, 0.4)',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        'laut-dalam': '#1F2937',
        'merah-penus' : '#D32710',
        'merah-gelap-penus': '#A61603',
        'putih-putih': '#D9D9D9',
        'merah-tergelap' : '#6D1408',
        'gelap' : '#1F2937',
        'penus' : '#C80000',
      },
      fontSize: {
        '7.5xl': '7rem',
      },
    },
  },
  // Menambahkan layer utilities untuk efek glassmorphism
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
