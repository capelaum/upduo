import { MdSend } from 'react-icons/md'
import { ContactButtonContainer } from './styles'

interface ContactButtonProps {
  text: string
}

export function ContactButton({ text }: ContactButtonProps) {
  return (
    <ContactButtonContainer>
      {text} <MdSend size={24} />
    </ContactButtonContainer>
  )
}
