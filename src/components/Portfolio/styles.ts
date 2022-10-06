import styled from 'styled-components'

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem 0;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`

export const Description = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  max-width: 25rem;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  width: 100%;

  padding: 2rem 1.25rem;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  img {
    width: 40%;
    object-fit: cover;
    border-radius: 1.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    padding: 2rem 1rem;

    img {
      width: 100%;
      border-radius: none;
    }
  }
`

export const ProjectItemDetails = styled.div`
  display: flex;
  flex-direction: column;

  align-self: stretch;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['gray-600']};
  }

  a {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.greenLight};
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
