import { styled } from 'styles/themes/default'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
})

export const HomeContent = styled('main', {
  maxWidth: '1200px',
  width: '100%',

  padding: '0 1.25rem',
  marginTop: '12rem',
})
