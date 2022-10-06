import styled from 'styled-components'

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(ellipse, #239172 0%, #0e2d3e 70%);

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`

export const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  max-width: 25rem;
`

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: grab;
`

export const SlidesContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 100%;

  padding: 1.4rem;

  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['gray-600']};
  }

  border-radius: 20px;
`

export const SliderArrow = styled.button`
  height: 100%;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  &:hover {
    svg {
      transition: all 0.3s ease-in-out;
      stroke: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      transition: all 0.3s ease-in-out;
      stroke: ${({ theme }) => theme.colors['gray-600']};
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`
