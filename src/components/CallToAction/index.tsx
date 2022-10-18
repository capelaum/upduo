import { ContactButton } from 'components/ContactButton'
import { BsWhatsapp } from 'react-icons/bs'
import { CallToActionContainer, CallToActionContent } from './styles'

export function CallToAction() {
  return (
    <CallToActionContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <CallToActionContent>
        <h1>Vamos trabalhar juntos?</h1>

        <p>Entre em contato e vamos tornar o seu projeto possível.</p>
      </CallToActionContent>

      <ContactButton
        variant="secondary"
        as="a"
        href="https://wa.me/5561992319872"
        target="_blank"
        rel="noreferrer noopener nofollow"
        title="WhatsApp da UpDuo"
      >
        <>
          <span>Fale conosco</span>
          <BsWhatsapp size={24} />
        </>
      </ContactButton>
    </CallToActionContainer>
  )
}
