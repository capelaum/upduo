import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const HeroContainer = styled(motion.section, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12rem',

  '@media (max-width: 1200px)': {
    gap: '4.5rem',
  },

  '@bp1': {
    flexDirection: 'column',
  },
})

export const HeroSquareImageContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: -1,
  opacity: 0.3,
})

export const HeroCallToAction = styled(motion.div, {
  flex: '50%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  h2: {
    fontSize: '$3xl',
    fontWeight: 700,
    marginBottom: '1.25rem',
  },

  p: {
    fontSize: '$xl',
    marginBottom: '1.75rem',
  },

  '@bp1': {
    alignItems: 'center',

    h2: {
      textAlign: 'center',
    },

    p: {
      fontSize: '$md',
      textAlign: 'center',
      marginBottom: '2.5rem',
    },
  },
})

export const HeroImageContainer = styled(motion.div, {
  flex: '50%',

  img: {
    width: '100%',
    height: '100%',
  },
})
