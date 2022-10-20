import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const HeroVectorsContainer = styled(motion.div, {
  flex: '50%',
  paddingRight: '8%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    flex: '100%',
    width: '100%',
    padding: '0 15%',
  },
})

export const VectorsContainer = styled(motion.div, {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  maxWidth: '400px',

  // border: '1px solid red',

  img: {
    width: '100%',
    height: '100%',
  },

  '.hero-vector': {
    position: 'absolute',
  },

  '.hero-diagram-left-1': {
    top: '4%',
    left: '-15%',
    width: '38%',
  },
  '.hero-diagram-left-2': {
    top: '60%',
    left: '-6%',
    width: '35%',
  },
  '.hero-diagram-left-3': {
    bottom: '-10%',
    left: '16%',
    width: '26%',
  },
  '.hero-thumbs-up': {
    bottom: '-10%',
    left: '-12%',
    width: '20%',

    span: {
      position: 'absolute',
      top: '54%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
      color: '$white',
      fontSize: '$xs',

      // border: '1px solid red',
    },
  },

  '.hero-diagram-right-1': {
    top: 0,
    right: '-22%',
    width: '38%',
  },
  '.hero-diagram-right-2': {
    bottom: '-15%',
    right: '-16%',
    width: '50%',
  },

  '.hero-likes': {
    top: '48%',
    right: '-10%',
    width: '24%',

    span: {
      position: 'absolute',
      top: '40%',
      left: '60%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
      color: '$blue700',

      // border: '1px solid red',
    },
  },

  '@bp1': {
    width: '100%',
  },

  '@bp2': {
    '.hero-likes': {
      span: {
        top: '38%',
        left: '65%',
        fontSize: '0.8125rem',
      },
    },
    '.hero-thumbs-up': {
      span: {
        // top: '38%',
        left: '70%',
        fontSize: '0.6rem',
      },
    },
  },
})
