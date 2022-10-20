import { motion } from 'framer-motion'
import { styled } from 'styles/stiches.config'

export const PortfolioContainer = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '15rem',

  h1: {
    fontSize: '$2xl',
    fontWeight: 500,
    marginBottom: '2rem',
  },

  '@media (max-width: 1300px)': {
    overflow: 'hidden',
  },

  '@bp1': {
    marginTop: '12rem',
  },
})

export const Description = styled('p', {
  marginTop: '1.25rem',
  marginBottom: '5rem',

  fontSize: '1.5rem',
  textAlign: 'center',
  fontWeight: 500,
  maxWidth: '25rem',
})

export const ProjectsContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const ProjectItem = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3rem',
  width: '100%',
  padding: '1.5rem 1.25rem',
  borderRadius: '1.25rem',
  backgroundColor: '$white',

  transition: 'all 0.3s ease-in-out',

  img: {
    width: '40%',
    objectFit: 'cover',
    borderRadius: '1.25rem',
  },

  '@bp1': {
    flexDirection: 'column',
    gap: '2rem',

    img: {
      width: '100%',
      borderRadius: 'none',
    },
  },
})

export const ProjectItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignSelf: 'stretch',
  alignItems: 'flex-start',

  h2: {
    fontSize: '$2xl',
    fontWeight: 500,
    color: '$blue700',
    marginBottom: '2rem',
  },

  p: {
    marginBottom: '1.25rem',
    fontSize: '$md',
    lineHeight: 1.6,
    fontWeight: 500,
    color: '$gray600',
  },

  a: {
    fontSize: '$lg',
    fontWeight: 700,
    color: '$green500',
    textDecoration: 'none',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green200',
    },
  },

  '@bp1': {
    h2: {
      fontSize: '$xl',
    },

    p: {
      fontSize: '$sm',
    },
  },
})
