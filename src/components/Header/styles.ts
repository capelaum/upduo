import { styled } from 'styles/stiches.config'

export const HeaderContainer = styled('header', {
  width: '100%',
  position: 'fixed',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: 3,

  backgroundColor: 'hsl(0 0% 0% / 0.5)',

  '@supports (backdrop-filter: blur(0.5rem))': {
    backgroundColor: 'hsl(220 63% 20% / 0.9)',
    backdropFilter: 'blur(0.5rem)',
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

  img: {
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.95)',
    },
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },

  '@bp2': {
    padding: '0.5rem 1.5rem',
    nav: {
      display: 'none',
    },
  },
})

export const NavLink = styled('a', {
  fontSize: '$sm',
  color: '$white',
  textDecoration: 'none',
  padding: '0.8125rem 0',
  fontWeight: 500,
  position: 'relative',

  transition: 'all 0.2s ease-in-out',

  variants: {
    active: {
      true: {
        color: '$green200',
        '&::after': {
          content: '""',
          width: 50,
        },
      },
    },
  },

  '&::after': {
    content: '',
    width: 0,
    height: 2,
    backgroundColor: '$green200',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'block',

    transition: 'all 0.5s ease-in-out',
  },

  '&:hover': {
    color: '$green200',

    '&::after': {
      content: '',
      width: '60%',
    },
  },
})

export const NavLinkLine = styled('div', {
  width: '100%',
  height: 2,
  backgroundColor: '$green200',
  position: 'absolute',
  bottom: 0,
  left: 0,
  transform: 'translateX(-100%)',

  variants: {
    active: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },
})
