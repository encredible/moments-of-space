import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - 자연스럽고 따뜻한 톤
        primary: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d4cfc4',
          500: '#8b7d6b',
          700: '#6b5d4a',
          900: '#2d2520',
        },
        // Accent Colors - 포인트 컬러
        accent: {
          400: '#d4a574',
          500: '#c19a6b',
          600: '#a67c52',
        },
        // Background Colors
        bg: {
          light: '#ffffff',
          warm: '#faf9f7',
          dark: '#2d2520',
        },
        // Text Colors
        text: {
          primary: '#2d2520',
          secondary: '#6b5d4a',
          light: '#8b7d6b',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'sm': '640px',   // 모바일
        'md': '768px',   // 태블릿  
        'lg': '1024px',  // 데스크탑
        'xl': '1200px',  // 최대 폭
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'nav-desktop': '2rem',    // 32px - 데스크탑 네비게이션 간격
        'nav-tablet': '1.5rem',   // 24px - 태블릿 네비게이션 간격
        'nav-mobile': '1rem',     // 16px - 모바일 네비게이션 간격
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'nav': '10px',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};

export default config; 