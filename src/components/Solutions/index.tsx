import { solutions } from '@constants'
import { ContactButton } from 'components/ContactButton'
import Image from 'next/future/image'
import { MdOutlineMail } from 'react-icons/md'
import {
  SolutionsContainer,
  SolutionsContent,
  SolutionsImageContainer,
} from './styles'

export function Solutions() {
  return (
    <SolutionsContainer>
      <SolutionsImageContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Image src={solutions} alt="Gráficos coloridos." />
      </SolutionsImageContainer>

      <SolutionsContent
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1>Soluções criativas e estratégicas para escalar seu negócio! </h1>

        <p>
          A UPDUO foi fundada com intuito de aprimorar a comunicação visual e
          digital do seu negócio. Aliando Design e Marketing nos projetos, com o
          foco na experiência agradável e persuasiva dos clientes finais, a fim
          de gerar mais vendas e propagar a imagem positiva das empresas no
          digital.
        </p>

        <ContactButton
          as="a"
          href="mailto:contato.upduo@gmail.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Enviar e-mail para UpDuo"
        >
          <>
            <span>Entre em contato</span>
            <MdOutlineMail size={24} />
          </>
        </ContactButton>
      </SolutionsContent>
    </SolutionsContainer>
  )
}
