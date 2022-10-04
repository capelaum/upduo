import styled from 'styled-components'

export const ContactButtonContainer = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.25rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenLight};
  }
`
