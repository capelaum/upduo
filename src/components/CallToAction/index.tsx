import { ContactButton } from 'components/ContactButton'
import { CallToActionContainer, CallToActionContent } from './styles'

export function CallToAction() {
  return (
    <CallToActionContainer>
      <CallToActionContent>
        <h1>Vamos trabalhar juntos?</h1>

        <p>Entre em contato e vamos tornar o seu projeto possível.</p>
      </CallToActionContent>

      <ContactButton text="Fale conosco" variant="secondary" />
    </CallToActionContainer>
  )
}
