import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      green600: '#168566',
      green500: '#239172',
      green200: '#2AB793',
      green100: '#45D0B2',
      blue700: '#12264E',
      blue500: '#0E2D3E',

      gray900: '#121214',
      gray800: '#202024',
      gray600: '#696969',
      gray500: '#8D8D99',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',
    },

    fontSizes: {
      xs: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
    },
  },

  media: {
    bp1: '(max-width: 768px)',
    bp2: '(max-width: 576px)',
    bp3: '(max-width: 480px)',
  },
})
