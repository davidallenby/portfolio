import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{css,scss}'],
  theme: {
    fontFamily: {
      serif: ['eb_garamond_med', 'serif'],
      sans: ['hk_grotesk_reg', 'sans-serif'],
      'sans-medium': ['hk_grotesk_med', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#917059',
        'primary-100': '#E8DFD9',
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
      },
      animation: {
        fadeIn: 'fadeIn 0.25s'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.h1')[0],
          lineHeight: theme('fontSize.h1')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        h2: {
          fontSize: theme('fontSize.h2')[0],
          lineHeight: theme('fontSize.h2')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        h3: {
          fontSize: theme('fontSize.h3')[0],
          lineHeight: theme('fontSize.h3')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        h4: {
          fontSize: theme('fontSize.h4')[0],
          lineHeight: theme('fontSize.h4')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        h5: {
          fontSize: theme('fontSize.h5')[0],
          lineHeight: theme('fontSize.h5')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        h6: {
          fontSize: theme('fontSize.h6')[0],
          lineHeight: theme('fontSize.h6')[1].lineHeight,
          fontFamily: theme('fontFamily.serif').join(', '),
          color: theme('colors.body')
        },
        '.subtitle': {
          fontFamily: theme('fontFamily.sans').join(', '),
          color: theme('colors.subtitle'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.subtitle')
        }
      })
    })
  ]
}
