import { globalCss } from './stiches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: '8rem',
  },

  body: {
    backgroundColor: '$blue500',
    color: '$white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',

    scrollbarWidth: 'thin',
    scrollbarColor: '$green200 $green200',

    '&::-webkit-scrollbar': {
      background: '$gray800',
      width: '10px',
      '&:hover': {
        background: '$gray800',
        width: '10px',
      },
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$green500',
      borderRadius: '50px',
      width: '10px',
      '&:hover': {
        background: '$green200',
        width: '10px',
      },
    },
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$white',
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:focus': {
      outline: 'none',
    },
  },
})
