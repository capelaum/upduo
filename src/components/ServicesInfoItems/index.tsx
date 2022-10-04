import { ServiceInfoItem, ServicesInfoItemsContainer } from './styles'

export function ServicesInfoItems() {
  return (
    <ServicesInfoItemsContainer>
      <ServiceInfoItem>
        <h1>Design</h1>
        <p>O design está em tudo que a nossa volta.</p>
      </ServiceInfoItem>

      <ServiceInfoItem>
        <h1>Marketing Digital</h1>
        <p>Se sua empresa não é vista, não é lembrada.</p>
      </ServiceInfoItem>
    </ServicesInfoItemsContainer>
  )
}
