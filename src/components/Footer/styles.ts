import { keyframes, styled } from 'styles/stiches.config'

export const FooterContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  position: 'relative',
  paddingBottom: '1.25rem',

  '@bp2': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const SquareLeft = styled('div', {
  position: 'absolute',
  top: '2rem',
  left: 0,
  rotate: '-90deg',

  '@bp2': {
    transform: 'scale(0.4)',
    left: '-6rem',
  },
})

export const SquareRight = styled('div', {
  position: 'absolute',
  top: '-2rem',
  right: 0,

  '@bp2': {
    transform: 'scale(0.4)',
    right: '-6rem',
  },
})

export const UpduoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',

  span: {
    fontSize: '$xs',
  },

  '@bp2': {
    alignItems: 'center',
    gap: '1rem',

    span: {
      textAlign: 'center',
    },
  },
})

export const SocialContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '1rem',

  alignSelf: 'stretch',

  zIndex: 1,

  paddingTop: '2rem',

  span: {
    fontSize: '$xs',
  },

  a: {
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    cursor: 'pointer',
    color: '$white',

    '&:hover': {
      color: '$green200',
    },
  },

  '@bp2': {
    alignItems: 'center',
    gap: '2rem',

    span: {
      textAlign: 'center',
    },
  },
})

export const SocialLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.25rem',
})

const socialLinkAnimation = keyframes({
  '0%': { width: 0, height: 0 },
  '50%': { width: '50%', height: '50%' },
  '100%': { width: '100%', height: '100%' },
})

export const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '10rem',

  overflow: 'hidden',

  width: '48px',
  height: '48px',

  transition: 'all 0.2s',
  color: '$white',

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$green200',
    zIndex: -1,
    borderRadius: '50%',
    transform: 'translate(100%, 100%)',
    transition: 'all 0.2s',
  },

  '&:hover': {
    transform: 'scale(1.25)',

    '&::before': {
      transform: ' translate(0)',
      animation: 'socialLinkAnimation 0.2s linear',
      animationName: socialLinkAnimation,
    },
  },
})
