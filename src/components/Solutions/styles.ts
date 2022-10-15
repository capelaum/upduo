import styled from 'styled-components'

export const SolutionsContainer = styled.section`
  margin: 8rem 0;
  gap: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 5rem;
    margin-bottom: 4rem;

    flex-direction: column;
  }
`

export const SolutionsImageContainer = styled.div`
  flex: 40%;

  img {
    width: 100%;
    height: 100%;
  }
`

export const SolutionsContent = styled.div`
  flex: 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`
