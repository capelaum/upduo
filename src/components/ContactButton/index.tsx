import { ReactNode } from 'react'
import { ContactButtonContainer } from './styles'

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement

interface ContactButtonProps<T extends ButtonTypes>
  extends React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  as?: 'button' | 'a'
  type?: 'submit' | 'reset' | 'button'
}

export function ContactButton({
  variant = 'primary',
  children,
  as = 'button',
  type = 'button',
  ...props
}: ContactButtonProps<ButtonTypes>) {
  return (
    <ContactButtonContainer variant={variant} as={as} {...props}>
      {children}
    </ContactButtonContainer>
  )
}
