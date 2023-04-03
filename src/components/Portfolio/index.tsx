import lead_line from 'assets/lead_line.svg'
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
  setPortfolioInView: (inView: boolean) => void
}

export function Portfolio({
  id,
  homeProjects,
  setPortfolioInView,
}: PortfolioProps) {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setPortfolioInView(true)
      document.title = 'UpDuo Comunicação - Portfólio'
    }

    if (!inView) {
      setPortfolioInView(false)
    }
  }, [inView, setPortfolioInView])

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

      <ProjectsContainer>
        {homeProjects.map((project, index) => (
          <ProjectItem
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? '100%' : '-100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              delay: 0.3,
              duration: 1.2,
              bounce: 0.4,
            }}
            viewport={{ once: true }}
          >
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
