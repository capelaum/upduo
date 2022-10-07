import Image from 'next/future/image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { TbTarget } from 'react-icons/tb'
import {
  ServiceItem,
  ServiceItemIconContainer,
  ServiceItemsContainer,
  ServicesContainer,
  ServicesContent,
  ServicesImageContainer,
} from './styles'

import services from 'assets/services.svg'

export function Services() {
  return (
    <ServicesContainer>
      <ServicesContent>
        <h1>
          Encontre de forma criativa soluções comunicacionais, estratégicas e
          visuais, acredite na força e na importância do design para uma boa
          presença física e digital.
        </h1>

        <ServiceItemsContainer>
          <ServiceItem>
            <ServiceItemIconContainer>
              <IoMdCheckmarkCircleOutline size={24} />
            </ServiceItemIconContainer>

            <h2>Design Gráfico</h2>

            <p>
              Agregar valor ao produto ou serviço, cada projeto é visto como um
              novo universo uma nova solução, o design está em tudo que fazemos
              e vemos. Identidade visual, criação de Marca, aplicações
              Corporativas (Papelaria Institucional, Uniformes, Brindes, peças
              gráficas digitais).
            </p>
          </ServiceItem>

          <ServiceItem>
            <ServiceItemIconContainer>
              <TbTarget size={24} />
            </ServiceItemIconContainer>

            <h2>Social Media</h2>

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

      <ServicesImageContainer>
        <Image
          src={services}
          alt="Balões com caixas coloridas de mensagem e itens de mídias sociais."
        />
      </ServicesImageContainer>
    </ServicesContainer>
  )
}
