import styled from 'styled-components'

interface ContactButtonContainerProps {
  variant: 'default' | 'light'
}

export const ContactButtonContainer = styled.button<ContactButtonContainerProps>`
  padding: 1rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme, variant }) =>
    variant === 'default' ? theme.colors.secondary : theme.colors.white};
  color: ${({ theme, variant }) =>
    variant === 'default' ? theme.colors.white : theme.colors.secondary};

  font-size: 1.25rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'default' ? theme.colors.greenLight : '#fff'};
  }
`
