import { MdSend } from 'react-icons/md'
import { ContactButtonContainer } from './styles'

interface ContactButtonProps {
  text: string
  variant?: 'default' | 'light'
}

export function ContactButton({
  text,
  variant = 'default',
}: ContactButtonProps) {
  return (
    <ContactButtonContainer variant={variant}>
      <span>{text}</span>
      <MdSend size={24} />
    </ContactButtonContainer>
  )
}
