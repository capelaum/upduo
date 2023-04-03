import { styled } from 'styles/stiches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
  overflow: 'hidden',
})

export const HomeContent = styled('main', {
  maxWidth: '1200px',
  width: '100%',

  padding: '0 1.25rem',
  marginTop: '12rem',

  '@bp1': {
    marginTop: '10rem',
  },
})
