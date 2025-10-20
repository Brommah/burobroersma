/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0B0D0F',
        paper: '#FFFFFF',
        neutral: {
          100: '#E7EAEE',
          200: '#C9CED6',
          300: '#9BA3AE',
          400: '#6B7280',
          500: '#4B5563',
        },
        accent: {
          DEFAULT: '#b6966d',
          hover: '#9d7f58',
          light: '#c9a87f',
        },
        success: '#2DBE8B',
        alert: '#D64545',
        focus: '#3B82F6',
        // Legacy support
        primary: {
          DEFAULT: '#B08C3E',
          50: '#FAF8F4',
          100: '#F4EFDF',
          200: '#E8D9B0',
          300: '#D4B87A',
          400: '#C29E5C',
          500: '#B08C3E',
          600: '#8F7332',
          700: '#6E5927',
          800: '#4D3F1C',
          900: '#2C2410',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'IBM Plex Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'IBM Plex Mono',
          'Menlo',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.04em' }],
        'caption': ['0.8125rem', { lineHeight: '1.4' }],
        'body-s': ['0.875rem', { lineHeight: '1.55' }],
        'body-m': ['1rem', { lineHeight: '1.6' }],
        'body-l': ['1.125rem', { lineHeight: '1.6' }],
        'h4': ['1.25rem', { lineHeight: '1.2' }],
        'h3': ['1.5rem', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem, 1.2vw + 1.1rem, 2.25rem)', { lineHeight: '1.15' }],
        'h1': ['clamp(2rem, 2.5vw + 1rem, 3.5rem)', { lineHeight: '1.05' }],
        'hero': ['clamp(2.5rem, 3vw + 1.5rem, 4rem)', { lineHeight: '1.05' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      maxWidth: {
        'container': '1200px',
        'prose': '72ch',
        'prose-narrow': '55ch',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'keyline': '0 0 0 1px #E7EAEE',
        'elevated': '0 1px 3px rgba(11, 13, 15, 0.08), 0 0 0 1px #E7EAEE',
        'none': 'none',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'count-up': 'countUp 0.5s ease-out',
        'draw-line': 'drawLine 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '1000' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '350ms',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
