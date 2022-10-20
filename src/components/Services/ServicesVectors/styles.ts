import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const ServicesVectorsContainer = styled(motion.div, {
  flex: '50%',
  // width: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // border: '1px solid red',

  background: 'radial-gradient(circle, $green500 0%, transparent 60%)',

  position: 'relative',

  img: {
    width: '100%',
    height: '100%',
  },

  '.service-vector': {
    position: 'absolute',
  },

  '.photo-icon': {
    top: '5%',
    left: '8%',
    width: '32%',
  },
  '.play-icon': {
    top: '-6%',
    left: '38%',
    width: '30%',
  },
  '.pin-icon': {
    bottom: '7%',
    right: '8%',
    width: '34%',
  },
  '.star-icon': {
    top: '28%',
    right: '2%',
    width: '25%',
  },
  '.radio-icon': {
    bottom: '25%',
    left: '12%',
    width: '28%',
  },

  '@bp1': {
    flex: '100%',
    width: '100%',
  },
})
