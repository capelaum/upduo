import {
  ServiceInfoItem,
  ServicesInfoItemsContainer,
  ServicesSquareImageContainer,
} from './styles'

import solutions_square from 'assets/solutions_square.svg'
import Image from 'next/future/image'

export function ServicesInfoItems() {
  return (
    <ServicesInfoItemsContainer>
      <ServiceInfoItem>
        <h1>Design</h1>
        <p>O design está em tudo à nossa volta.</p>
      </ServiceInfoItem>

      <ServiceInfoItem>
        <h1>Marketing Digital</h1>
        <p>Se sua empresa não é vista, não é lembrada.</p>
      </ServiceInfoItem>

      <ServicesSquareImageContainer>
        <Image src={solutions_square} alt="Losango azul com baixa opacidade" />
      </ServicesSquareImageContainer>
    </ServicesInfoItemsContainer>
  )
}
