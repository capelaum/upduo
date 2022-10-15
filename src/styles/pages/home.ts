import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`

export const HomeContent = styled.main`
  max-width: 1200px;
  width: 100%;

  padding: 0 1.25rem;
  margin-top: 10rem;

  @media (max-width: 576px) {
    margin-top: 14rem;
  }
`
