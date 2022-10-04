import styled from 'styled-components'

export const ServicesContainer = styled.section`
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ServicesContent = styled.div`
  flex: 50%;

  gap: 1rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.75rem;
  }
`

export const ServicesImageContainer = styled.div`
  flex: 50%;

  img {
    width: 100%;
  }
`

export const ServiceItemsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 400;
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors['gray-100']};
  }
`

export const ServiceItemIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};

  transform: rotate(45deg);

  svg {
    transform: rotate(-45deg);
  }
`
