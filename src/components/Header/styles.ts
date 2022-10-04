import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;

  background-color: hsl(233 55% 8% / 0.9);

  @supports (backdrop-filter: blur(0.25rem)) {
    backgroundcolor: hsl(233 55% 16% / 0.8);
    backdropfilter: blur(0.25rem);
  }
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
