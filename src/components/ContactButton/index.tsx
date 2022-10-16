import { MdSend } from 'react-icons/md'
import { ContactButtonContainer } from './styles'

interface ContactButtonProps {
  text: string
  variant?: 'primary' | 'secondary'
}

export function ContactButton({
  text,
  variant = 'primary',
}: ContactButtonProps) {
  return (
    <ContactButtonContainer variant={variant}>
      <span>{text}</span>
      <MdSend size={24} />
    </ContactButtonContainer>
  )
}
