import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 3;

  background-color: hsl(0 0% 0% / 0.5);

  @supports (backdrop-filter: blur(0.25rem)) {
    background-color: hsl(220 63% 19% / 0.8);
    backdrop-filter: blur(0.25rem);
  }
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0.5rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.greenLight};
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 2rem 1.25rem;
  }

  @media (max-width: 480px) {
    nav a {
      font-size: 1rem;
    }
  }
`
