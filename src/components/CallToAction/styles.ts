import styled from 'styled-components'

export const CallToActionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  margin: 8rem 0;
  padding: 2.5rem 3rem;

  border-radius: 1.25rem;

  background-color: ${({ theme }) => theme.colors.secondary};

  button {
    display: flex;
    min-width: 243px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      align-self: stretch;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 2rem;

    button {
      padding: 1rem 0.5rem;
      min-width: 100%;
    }
  }
`

export const CallToActionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`
