import Image from 'next/future/image'
import { SolutionsContainer, SolutionsContent } from './styles'

import solutions from 'assets/solutions.svg'
import { ContactButton } from 'components/ContactButton'

export function Solutions() {
  return (
    <SolutionsContainer>
      <Image src={solutions} alt="Gráficos coloridos." />

      <SolutionsContent>
        <h1>Soluções criativas e estratégicas para escalar seu negócio! </h1>

        <p>
          A UPDUO foi fundada com intuído de ajudar na comunicação visual e
          digital. Aliando Design e Marketing nos projetos, com o foco na
          experiência agradável e persuasiva dos clientes finais, a fim de gerar
          mais vendas e propagar a imagem positiva das empresas no digital.
        </p>

        <ContactButton text="Saiba mais" />
      </SolutionsContent>
    </SolutionsContainer>
  )
}
