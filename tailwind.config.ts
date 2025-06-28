import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      }
    },
    fontFamily: {
      serif: ['eb_garamond_med', 'serif'],
      sans: ['hk_grotesk_reg', 'sans-serif'],
      'sans-medium': ['hk_grotesk_med', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#917059',
          100: '#E8DFD9' // This is approximately 38% lighter than primary
        },
        beige: '#f5e9e1',
        subtitle: '#b1b1b1',
        'off-white': '#FBFBFB',
        body: '#3D3D3D'
      },
      fontSize: {
        base: '1rem',
        h1: ['3rem', { lineHeight: '1.2' }],
        h2: ['2.67rem', { lineHeight: '1.2' }],
        h3: ['2.33rem', { lineHeight: '1.2' }],
        h4: ['2rem', { lineHeight: '1.2' }],
        h5: ['1.67rem', { lineHeight: '1.2' }],
        h6: ['1.33rem', { lineHeight: '1.2' }]
      },
      borderRadius: {
        DEFAULT: '0'
      },
      letterSpacing: {
        subtitle: '0.115rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: {
          fontSize: 'clamp(3rem, 4vw, 4rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        h2: {
          fontSize: 'clamp(2.5rem, 3.5vw, 3.25rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        h3: {
          fontSize: 'clamp(2rem, 3vw, 3rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        h4: {
          fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        h5: {
          fontSize: 'clamp(1.5rem, 2vw, 2.5rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        h6: {
          fontSize: 'clamp(1.25rem, 1.5vw, 2rem)',
          lineHeight: '1.2',
          fontFamily: 'var(--font-heading)'
        },
        '.subtitle': {
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          fontFamily: 'var(--font-body)',
          lineHeight: '1.2',
          textTransform: 'uppercase',
          letterSpacing: '0.115rem',
          color: '#b1b1b1'
        }
      })
    })
  ]
}

export default config
