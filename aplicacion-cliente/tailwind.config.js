/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Precise Color Management (Curator Design System)
        primary: "#0c56d0",
        "primary-dim": "#004aba",
        "primary-container": "#dae2ff",
        "primary-fixed": "#dae2ff",
        "primary-fixed-dim": "#c6d3ff",
        
        secondary: "#4f607c",
        "secondary-dim": "#445470",
        "secondary-container": "#d6e3ff",
        "secondary-fixed": "#d6e3ff",
        "secondary-fixed-dim": "#c4d5f7",
        
        tertiary: "#615b77",
        "tertiary-dim": "#554f6b",
        "tertiary-container": "#e3dbfd",
        "tertiary-fixed": "#e3dbfd",
        "tertiary-fixed-dim": "#d5cdee",
        
        error: "#9f403d",
        "error-dim": "#4e0309",
        "error-container": "#fe8983",
        
        surface: "#f8f9fb",
        "surface-bright": "#f8f9fb",
        "surface-dim": "#d1dce2",
        "surface-variant": "#dbe4ea",
        "surface-tint": "#0c56d0",
        
        "on-surface": "#2b3438",
        "on-surface-variant": "#586065",
        "on-primary": "#f8f7ff",
        "on-secondary": "#f8f8ff",
        "on-tertiary": "#fcf7ff",
        "on-error": "#fff7f6",
        "on-background": "#2b3438",
        
        "on-primary-container": "#004ab9",
        "on-secondary-container": "#42526e",
        "on-tertiary-container": "#524c68",
        "on-error-container": "#752121",
        
        "on-primary-fixed": "#003993",
        "on-primary-fixed-variant": "#0253cd",
        "on-secondary-fixed": "#30405b",
        "on-secondary-fixed-variant": "#4c5c78",
        "on-tertiary-fixed": "#3f3a54",
        "on-tertiary-fixed-variant": "#5c5672",
        
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f4f7",
        "surface-container": "#eaeef2",
        "surface-container-high": "#e2e9ee",
        "surface-container-highest": "#dbe4ea",
        
        outline: "#737c81",
        "outline-variant": "#aab3b9",
        "inverse-surface": "#0c0f10",
        "inverse-on-surface": "#9b9d9f",
        "inverse-primary": "#5c8bff",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      boxShadow: {
        'premium': '0 10px 15px -3px rgba(12, 86, 208, 0.05), 0 4px 6px -2px rgba(12, 86, 208, 0.02)',
      }
    },
  },
  plugins: [],
}
