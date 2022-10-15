import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;

  margin-bottom: 4.5rem;

  @media (max-width: 1200px) {
    gap: 4.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeroSquareImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.3;
`

export const HeroCallToAction = styled.div`
  flex: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 768px) {
    align-items: center;

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      font-size: 1.25rem;
      text-align: center;
      margin-bottom: 3.5rem;
    }
  }
`

export const HeroImageContainer = styled.div`
  flex: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`
