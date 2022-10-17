import Image from 'next/future/image'
import Link from 'next/link'
import { Project } from 'types/home'
import {
  Description,
  PortfolioContainer,
  ProjectItem,
  ProjectItemDetails,
  ProjectsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'

interface PortfolioProps {
  id?: string
  homeProjects: Project[]
}

export function Portfolio({ id, homeProjects }: PortfolioProps) {
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
        {homeProjects.map((project) => (
          <ProjectItem key={project.id}>
            <Image
              src={project.cover.url}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
            />

            <ProjectItemDetails>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <Link href={project.link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  title={project.title}
                >
                  Saiba mais
                </a>
              </Link>
            </ProjectItemDetails>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </PortfolioContainer>
  )
}
