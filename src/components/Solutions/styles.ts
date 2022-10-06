import styled from 'styled-components'

export const SolutionsContainer = styled.section`
  margin: 8rem 0;
  gap: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid red; */

  @media (max-width: 1200px) {
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 5rem;
    flex-direction: column;
  }
`

export const SolutionsContent = styled.div`
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
