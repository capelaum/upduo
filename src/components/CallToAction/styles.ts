import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const CallToActionContainer = styled(motion.section, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '3rem',

  margin: '8rem 0',
  padding: '2.5rem 3rem',

  borderRadius: '1.25rem',

  backgroundColor: '$green500',

  button: {
    display: 'flex',
    minWidth: 243,
  },

  '@bp1': {
    flexDirection: 'column',

    button: {
      alignSelf: 'stretch',
    },
  },

  '@bp3': {
    padding: '1.5rem 2rem',

    button: {
      padding: '1rem 0.5rem',
      minWidth: '100%',
    },
  },
})

export const CallToActionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  h1: {
    color: '$white',
    fontSize: '$2xl',
  },

  p: {
    color: '$white',
    fontSize: '$lg',
  },

  '@bp3': {
    gap: '1.5rem',
  },
})
