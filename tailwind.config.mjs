/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Deep-navy neutral palette + warm gold accent (single fixed dark theme).
        // Values are CSS custom properties (see src/styles/global.css) so every
        // component using these classes stays driven by one source of truth.
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          150: 'var(--neutral-150)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        // Warm gold accent. 600/700 alias the --accent-500/--accent-600
        // design tokens directly, so the brand color and the token stay in sync.
        accent: {
          50: 'var(--accent-ramp-50)',
          100: 'var(--accent-ramp-100)',
          200: 'var(--accent-ramp-200)',
          300: 'var(--accent-ramp-300)',
          400: 'var(--accent-ramp-400)',
          500: 'var(--accent-ramp-500)',
          600: 'var(--accent-500)',
          700: 'var(--accent-600)',
          800: 'var(--accent-ramp-800)',
          900: 'var(--accent-ramp-900)',
        },
        // Card/surface backgrounds — replaces literal bg-white so cards themable too.
        surface: {
          DEFAULT: 'var(--surface)',
          muted: 'var(--surface-muted)',
        },
        // Direct access to the two-step brand (gold) token, for any new UI.
        brand: {
          DEFAULT: 'var(--accent-500)',
          emphasis: 'var(--accent-600)',
        },
        success: 'var(--success)',
        danger: 'var(--error)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      // Base spacing already steps in 4px units, so every even token (2, 4, 6, 8...)
      // lands on an 8px multiple. These extend the scale for larger section rhythm.
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        section: '6rem',
        'section-sm': '3rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.7' }],
        xl: ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 16px 0 rgb(0 0 0 / 0.35)',
        card: '0 8px 30px 0 rgb(0 0 0 / 0.45)',
        glow: '0 0 24px 0 rgb(212 162 78 / 0.25)',
      },
    },
  },
  plugins: [],
};
