import { styled } from 'styles/themes/default'

export const HeaderContainer = styled('header', {
  width: '100%',
  position: 'fixed',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: 3,

  backgroundColor: 'hsl(0 0% 0% / 0.5)',

  '@supports (backdrop-filter: blur(0.25rem))': {
    backgroundColor: 'hsl(220 63% 19% / 0.8)',
    backdropFilter: 'blur(0.25rem)',
  },
})

export const HeaderContent = styled('div', {
  maxWidth: 1200,
  width: '100%',
  padding: '0.5rem 1.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

    a: {
      fontSize: '$sm',
      color: '$white',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        color: '$green200',
      },
    },
  },

  '@bp2': {
    flexDirection: 'column',
    padding: '2rem 1.25rem',
  },

  '@bp3': {
    'nav a': {
      fontSize: '$sm',
    },
  },
})
