import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['eb_garamond_med', 'serif'],
        sans: ['hk_grotesk_reg', 'sans-serif'],
        'sans-medium': ['hk_grotesk_med', 'sans-serif']
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
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#917059',
          100: '#E8DFD9' // This is approximately 38% lighter than primary
        },
        beige: '#f5e9e1',
        subtitle: '#b1b1b1',
        'off-white': '#FBFBFB',
        body: '#3D3D3D'
      },
      spacing: {
        header: '80px'
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
