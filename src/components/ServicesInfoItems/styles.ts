import styled from 'styled-components'

export const ServicesInfoItemsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 2rem;

  @media (max-width: 768px) {
    align-items: start;
    flex-direction: column;
  }
`
export const ServiceInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.125rem;
  }

  &:first-child {
    padding-right: 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    &:first-child {
      padding-right: 0;
      border-right: none;
      padding-bottom: 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const ServicesSquareImageContainer = styled.div`
  position: absolute;
  top: 40rem;
  left: 0;
  z-index: -1;
  opacity: 0.3;

  @media (max-width: 576px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 360px) {
    img {
      width: 250px;
    }
  }
`
