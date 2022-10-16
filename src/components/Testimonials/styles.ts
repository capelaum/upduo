import { styled } from 'styles/themes/default'

export const TestimonialsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingBottom: '12rem',

  background: 'radial-gradient(ellipse, #239172 0%, #0e2d3e 70%)',

  h1: {
    fontSize: '$2xl',
    fontWeight: 500,
    marginBottom: '2rem',
  },

  '@bp1': {
    paddingBottom: '6rem',
  },

  '@bp3': {
    paddingBottom: '3rem',
  },
})

export const Description = styled('p', {
  marginTop: '1.25rem',
  marginBottom: '3rem',
  fontSize: '$xl',
  textAlign: 'center',
  fontWeight: 500,
  maxWidth: '25rem',
})

export const SliderContainer = styled('div', {
  width: '100%',
  height: '100%',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  // border: '1px solid yellow',
})

export const SlidesContainer = styled('div', {
  maxWidth: '100%',
  cursor: 'grab',
})

export const SlideItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',

  padding: '1.25rem',

  backgroundColor: '$white',

  borderRadius: 20,

  img: {
    width: 50,
    height: 50,
  },

  h2: {
    marginTop: '0.75rem',
    marginBottom: '1.5rem',
    fontSize: '$md',
    textAlign: 'center',
    color: '$blue700',
  },

  p: {
    fontSize: '$sm',
    textAlign: 'center',
    lineHeight: 1.6,
    fontWeight: 500,
    color: '$gray500',
  },
})

export const SliderArrow = styled('button', {
  zIndex: 2,

  backgroundColor: '$transparent',

  variants: {
    direction: {
      left: {
        left: -24,
      },
      right: {
        right: -24,
      },
    },
  },

  '&:hover': {
    svg: {
      transition: 'all 0.2s ease-in-out',
      stroke: '$green500',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',

    svg: {
      transition: 'all 0.3s ease-in-out',
      stroke: '$gray500',
    },
  },

  '@bp3': {
    display: 'none',
  },
})
