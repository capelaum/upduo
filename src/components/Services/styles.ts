import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const ServicesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
  marginBottom: '8rem',

  '@media (max-width: 1200px)': {
    gap: '2rem',
  },

  '@bp1': {
    flexDirection: 'column-reverse',
  },
})

export const ServicesContent = styled(motion.div, {
  flex: '50%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  h1: {
    fontSize: '$xl',
  },
})

export const ServicesImageContainer = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flex: '50%',

  background: 'radial-gradient(circle, $green500 0%, #0e2d3e 60%)',

  img: {
    width: '100%',
    height: '100%',
  },

  '@bp1': {
    img: {
      width: '100%',
    },
  },
})

export const ServiceItemsContainer = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  gap: '2.25rem',

  '@bp1': {
    flexDirection: 'column',
  },
})

export const ServiceItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',

  h2: {
    fontSize: '$xl',
    fontWeight: 400,
  },

  p: {
    fontSize: '$md',
    color: '$gray100',
  },

  // '@bp1': {
  //   flexDirection: 'row',
  // },
})

export const ServiceItemHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  '@bp1': {
    flexDirection: 'row',
  },
})

export const ServiceItemIconContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.25rem',

  borderRadius: 8,
  backgroundColor: '$green500',

  transform: 'rotate(45deg)',

  transition: 'all 1s ease-in-out',

  svg: {
    transform: 'rotate(-45deg)',
  },

  '&:hover': {
    transform: 'rotate(405deg) scale(1.3)',
    background: '$green200',
  },
})
