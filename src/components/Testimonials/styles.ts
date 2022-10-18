import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { styled } from 'styles/stiches.config'

export const TestimonialsContainer = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '16rem',
  paddingBottom: '10rem',

  background: 'radial-gradient(ellipse, #239172 0%, #0e2d3e 70%)',

  h1: {
    fontSize: '$2xl',
    fontWeight: 500,
    marginBottom: '2rem',
  },

  '@bp1': {
    marginTop: '8rem',
  },
})

export const Description = styled('p', {
  marginTop: '1.25rem',
  marginBottom: '5rem',
  fontSize: '$xl',
  textAlign: 'center',
  fontWeight: 500,
  maxWidth: '25rem',
})

export const SliderContainer = styled(Slider, {
  width: '100%',
  display: 'flex !important',
  alignItems: 'center',

  '.slick-loading .slick-slide .slick-loading .slick-track': {
    visibility: 'hidden',
  },

  '.slick-track': {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
    cursor: 'grab',

    '@bp2': {
      gap: '0.5rem',
    },
  },

  '.slick-slide': {
    div: {
      display: 'flex !important',
      flexDirection: 'column',
      alignItems: 'center !important',
      justifyContent: 'center !important',
    },

    padding: '1.25rem',
    borderRadius: 20,
    minHeight: '250px',

    backgroundColor: '$white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

    img: {
      objectFit: 'cover',
      width: 50,
      height: 50,
      borderRadius: '999px',
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
      color: '$gray600',
    },
  },

  '.slick-list': {
    marginBottom: '1.125rem !important',
    height: '100%',
  },

  '.slick-dots': {
    listStyle: 'none',
    display: 'inline-flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',

    li: {
      background: '$white',
      width: 12,
      height: 12,
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      '&.slick-active': {
        background: '$blue700',
      },
    },

    button: {
      opacity: 0,
      width: 12,
      height: 12,
      cursor: 'pointer',
    },
  },
})

export const SlideItem = styled('div', {
  display: 'flex !important',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '1.25rem',
  backgroundColor: '$white',
  borderRadius: 20,

  img: {
    objectFit: 'cover',
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
    color: '$gray600',
  },
})

export const SliderArrowContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3rem',
  gap: '1rem',
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
      stroke: '$blue500',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',

    svg: {
      transition: 'all 0.3s ease-in-out',
      stroke: '$gray500',
    },
  },
})
