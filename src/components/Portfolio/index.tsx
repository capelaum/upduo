import lead_line from 'assets/lead_line.svg'
import { useAnimation } from 'framer-motion'
import Image from 'next/future/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Project } from 'types/home'
import {
  Description,
  PortfolioContainer,
  ProjectItem,
  ProjectItemDetails,
  ProjectsContainer,
} from './styles'

interface PortfolioProps {
  id?: string
  homeProjects: Project[]
}

export function Portfolio({ id, homeProjects }: PortfolioProps) {
  const { ref, inView } = useInView()

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      document.title = 'UpDuo Comunicação - Portfólio'
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.5,
        },
      })
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      })
    }
  }, [inView, animation])

  return (
    <PortfolioContainer id={id} ref={ref}>
      <h1>Portfolio</h1>

      <Image
        src={lead_line}
        alt="Linha pontilhada irregular branca e grossa."
      />

      <Description>
        Confira alguns de nossos trabalhos realizados e surpreenda-se!
      </Description>

      <ProjectsContainer animate={animation}>
        {homeProjects.map((project, index) => (
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
