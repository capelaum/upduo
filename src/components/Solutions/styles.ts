import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const SolutionsContainer = styled('section', {
  marginTop: '12rem',
  gap: '5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 1200px)': {
    gap: '4rem',
  },

  '@bp1': {
    gap: '5rem',
    marginTop: '8rem',

    flexDirection: 'column',
  },
})

export const SolutionsImageContainer = styled(motion.div, {
  flex: '40%',
  width: '100%',

  img: {
    width: '100%',
    height: '100%',
  },

  '@bp1': {
    flex: '90%',
  },
})

export const SolutionsContent = styled(motion.div, {
  flex: '60%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',

  h1: {
    fontSize: '$2xl',
  },

  p: {
    fontSize: '$md',
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
})
