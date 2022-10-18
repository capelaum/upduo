import { styled } from 'styles/stiches.config'

export const SolutionsContainer = styled('section', {
  margin: '12rem 0',
  gap: '5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 1200px)': {
    gap: '4rem',
  },

  '@bp1': {
    gap: '5rem',
    marginBottom: '4rem',

    flexDirection: 'column',
  },
})

export const SolutionsImageContainer = styled('div', {
  flex: '40%',

  img: {
    width: '100%',
    height: '100%',
  },
})

export const SolutionsContent = styled('div', {
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
