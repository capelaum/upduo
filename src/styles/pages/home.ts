import styled from 'styled-components'

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  overflow: hidden;
`

export const HomeContainer = styled.main`
  max-width: 1200px;
  width: 100%;
  padding: 1.25rem;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`
