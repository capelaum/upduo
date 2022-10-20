import { useEffect } from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { TbTarget } from 'react-icons/tb'
import { useInView } from 'react-intersection-observer'
import { ServicesVectors } from './ServicesVectors'
import {
  ServiceItem,
  ServiceItemHeader,
  ServiceItemIconContainer,
  ServiceItemsContainer,
  ServicesContainer,
  ServicesContent,
} from './styles'

interface ServicesProps {
  id?: string
  setServicesInView: (inView: boolean) => void
}

export function Services({ id, setServicesInView }: ServicesProps) {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setServicesInView(true)
    }

    if (!inView) {
      setServicesInView(false)
    }
  }, [inView, setServicesInView])

  return (
    <ServicesContainer id={id} ref={ref}>
      <ServicesContent
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1>
          Encontre de forma criativa soluções comunicacionais, estratégicas e
          visuais, acredite na força e na importância do design para uma boa
          presença física e digital.
        </h1>

        <ServiceItemsContainer>
          <ServiceItem>
            <ServiceItemHeader>
              <ServiceItemIconContainer>
                <IoMdCheckmarkCircleOutline size={24} />
              </ServiceItemIconContainer>

              <h2>Design Gráfico</h2>
            </ServiceItemHeader>

            <p>
              Agregar valor ao produto ou serviço, cada projeto é visto como um
              novo universo uma nova solução, o design está em tudo que fazemos
              e vemos. Identidade visual, criação de Marca, aplicações
              Corporativas (Papelaria Institucional, Uniformes, Brindes, peças
              gráficas digitais).
            </p>
          </ServiceItem>

          <ServiceItem>
            <ServiceItemHeader>
              <ServiceItemIconContainer>
                <TbTarget size={24} />
              </ServiceItemIconContainer>

              <h2>Social Media</h2>
            </ServiceItemHeader>

            <p>
              O mercado está bastante concorrido e crescendo dia após dia, e sua
              empresa precisa divulgar para vender mais, precisa ser e estar
              presente no digital. Análise da concorrência, criação de conteúdo
              visual, gerenciamento de redes sociais, monitoramento de métricas
              e retirada de relatórios mensais.
            </p>
          </ServiceItem>
        </ServiceItemsContainer>
      </ServicesContent>

      <ServicesVectors />

      {/* <ServicesImageContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src={services}
          alt="Balões com caixas coloridas de mensagem e itens de mídias sociais."
        />
      </ServicesImageContainer> */}
    </ServicesContainer>
  )
}
