import { solutions_square } from '@constants'
import Image from 'next/future/image'
import {
  ServiceInfoItem,
  ServicesInfoItemsContainer,
  ServicesSquareImageContainer,
} from './styles'

export function ServicesInfoItems() {
  return (
    <ServicesInfoItemsContainer>
      <ServiceInfoItem
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1>Design</h1>
        <p>O design está em tudo à nossa volta.</p>
      </ServiceInfoItem>

      <ServiceInfoItem
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1>Marketing Digital</h1>
        <p>Se sua empresa não é vista, não é lembrada.</p>
      </ServiceInfoItem>

      <ServicesSquareImageContainer>
        <Image src={solutions_square} alt="Losango azul com baixa opacidade" />
      </ServicesSquareImageContainer>
    </ServicesInfoItemsContainer>
  )
}
