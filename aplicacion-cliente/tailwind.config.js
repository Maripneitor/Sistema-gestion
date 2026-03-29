/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tonal-first Color Palette (Nexus Admin)
        primary: {
          DEFAULT: '#0c56d0',
          dim: '#004aba',
          container: '#dae2ff',
          fixed: '#dae2ff',
          'fixed-dim': '#c6d3ff',
        },
        secondary: {
          DEFAULT: '#4f607c',
          dim: '#445470',
          container: '#d6e3ff',
          fixed: '#d6e3ff',
          'fixed-dim': '#c4d5f7',
        },
        tertiary: {
          DEFAULT: '#615b77',
          dim: '#554f6b',
          container: '#e3dbfd',
          fixed: '#e3dbfd',
          'fixed-dim': '#d5cdee',
        },
        error: {
          DEFAULT: '#9f403d',
          container: '#fe8983',
          dim: '#4e0309',
        },
        surface: {
          DEFAULT: '#f8f9fb',
          bright: '#f8f9fb',
          dim: '#d1dce2',
          variant: '#dbe4ea',
          tint: '#0c56d0',
          container: {
            DEFAULT: '#eaeef2',
            low: '#f1f4f7',
            lowest: '#ffffff',
            high: '#e2e9ee',
            highest: '#dbe4ea',
          },
        },
        outline: {
          DEFAULT: '#737c81',
          variant: '#aab3b9',
        },
        on: {
          primary: '#f8f7ff',
          'primary-container': '#004ab9',
          surface: '#2b3438',
          'surface-variant': '#586065',
          error: '#fff7f6',
          'error-container': '#752121',
          background: '#2b3438',
        },
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      backgroundImage: {
        'editorial-gradient': 'linear-gradient(135deg, #0c56d0 0%, #004aba 100%)',
        'mesh': 'radial-gradient(at 0% 0%, rgba(12, 86, 208, 0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(97, 91, 119, 0.05) 0px, transparent 50%)',
      },
      boxShadow: {
        'ambient': '0 24px 48px -12px rgba(43, 52, 56, 0.06)',
      }
    },
  },
  plugins: [],
}
