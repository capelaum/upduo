import Image from 'next/future/image'
import {
  HeroCallToAction,
  HeroContainer,
  HeroImageContainer,
  HeroSquareImageContainer,
} from './styles'

import hero from 'assets/hero.svg'
import hero_square from 'assets/hero_square.svg'
import { ContactButton } from 'components/ContactButton'

export function Hero() {
  return (
    <HeroContainer>
      <HeroSquareImageContainer>
        <Image src={hero_square} alt="" />
      </HeroSquareImageContainer>

      <HeroCallToAction>
        <h2>Foco no Crescimento!</h2>

        <p>Design e Estratégias de marketing para escalar seu negócio!</p>

        <ContactButton text="Fale conosco" />
      </HeroCallToAction>

      <HeroImageContainer>
        <Image
          src={hero}
          alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
        />
      </HeroImageContainer>
    </HeroContainer>
  )
}
