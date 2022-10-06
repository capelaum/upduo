import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
