import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const ServicesInfoItemsContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',

  gap: '2rem',

  '@bp1': {
    alignItems: 'start',
    flexDirection: 'column',
  },
})

export const ServiceInfoItem = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.5rem',

  h1: {
    fontSize: '$2xl',
  },

  p: {
    fontSize: '$md',
  },

  '&:first-child': {
    paddingRight: '2rem',
    borderRight: '1px solid $green500',
  },

  '@bp1': {
    '&:first-child': {
      paddingRight: 0,
      borderRight: 'none',
      paddingBottom: '2rem',
      borderBottom: '1px solid $green500',
    },
  },
})

export const ServicesSquareImageContainer = styled('div', {
  position: 'absolute',
  top: '40rem',
  left: 0,
  zIndex: -1,
  opacity: 0.3,

  '@bp2': {
    img: {
      width: 300,
    },
  },

  '@media (max-width: 360px)': {
    img: {
      width: 250,
    },
  },
})
