import Image from 'next/future/image'
import {
  Description,
  PortfolioContainer,
  ProjectItem,
  ProjectItemDetails,
  ProjectsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'
import capelletto_advocacia from 'assets/portfolio/capelletto_advocacia.png'
import yummer from 'assets/portfolio/yummer.png'

const projects = [
  {
    id: 1,
    name: 'Capelletto Advocacia',
    description:
      'A marca Capelletto Advocacia entrou numa nova etapa para fazer sua história. É com orgulho que olhamos para o futuro. Olhar para uma evolução não só do que a nossa marca defende, mas também representa o que defende.',
    img: capelletto_advocacia,
  },
  {
    id: 2,
    name: 'Yummer Handmade',
    description:
      'O nome Yummer se originou da expressão “Yummy”, que remete à algo saboroso, assim como os produtos da Yummer. O logotipo tem a uma versão principal em escrita e outra versão em símbolo.',
    img: yummer,
  },
]

interface PortfolioProps {
  id?: string
}

export function Portfolio({ id }: PortfolioProps) {
  return (
    <PortfolioContainer id={id}>
      <h1>Portfolio</h1>

      <Image
        src={lead_line}
        alt="Linha pontilhada irregular branca e grossa."
      />

      <Description>
        Confira alguns de nossos trabalhos realizados e surpreenda-se!
      </Description>

      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <Image src={project.img} alt={project.name} />

            <ProjectItemDetails>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href="#">Saiba mais</a>
            </ProjectItemDetails>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </PortfolioContainer>
  )
}
