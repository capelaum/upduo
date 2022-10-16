import { styled } from 'styles/stiches.config'

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

export const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    svg: {
      stroke: '$green200',
    },
  },
})
