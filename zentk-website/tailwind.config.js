/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        brand: {
          deep: '#030712',
          night: '#07111f',
          cyan: '#7dd3fc',
          signal: '#22d3ee',
          fuchsia: '#d946ef',
          coral: '#fb7185',
          orange: '#f97316',
          cloud: '#e2e8f0',
        },
        dark: {
          base: '#030712',
          surface: '#0a1120',
          elevated: '#0f1a2e',
          border: '#1e2d42',
        },
        surface: {
          soft: 'rgba(255,255,255,0.035)',
          media: '#07111f',
        },
        ink: {
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'Segoe UI', 'sans-serif'],
        display: ['Syne', 'IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(125,211,252,0.12) 0%, rgba(217,70,239,0.08) 40%, transparent 72%)',
        'card-gradient': 'linear-gradient(135deg, rgba(125,211,252,0.06) 0%, rgba(217,70,239,0.05) 50%, rgba(251,113,133,0.05) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #190b28 0%, #0b1220 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
