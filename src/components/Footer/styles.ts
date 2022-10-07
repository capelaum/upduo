import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: relative;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Square = styled.div`
  position: absolute;
`

export const SquareLeft = styled(Square)`
  top: 2rem;
  left: 0;
  rotate: -90deg;

  @media (max-width: 576px) {
    transform: scale(0.4);
    left: -6rem;
  }
`

export const SquareRight = styled(Square)`
  top: -2rem;
  right: 0;

  @media (max-width: 576px) {
    transform: scale(0.4);
    right: -6rem;
  }
`

export const UpduoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  span {
    font-size: 0.875rem;
  }

  @media (max-width: 576px) {
    align-items: center;
    gap: 1rem;

    span {
      text-align: center;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;

  align-self: stretch;

  z-index: 1;

  padding-top: 2rem;

  span {
    font-size: 0.875rem;
  }

  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.greenLight};
    }
  }

  @media (max-width: 576px) {
    align-items: center;
    gap: 2rem;

    span {
      text-align: center;
    }
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.colors.greenLight};
    }
  }
`
