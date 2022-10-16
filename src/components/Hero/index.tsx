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
import { MdSend } from 'react-icons/md'

export function Hero() {
  return (
    <HeroContainer>
      <HeroSquareImageContainer>
        <Image src={hero_square} alt="Losango azul com baixa opacidade" />
      </HeroSquareImageContainer>

      <HeroCallToAction>
        <h2>Foco no Crescimento!</h2>

        <p>Design e Estratégias de marketing para escalar seu negócio!</p>

        <ContactButton
          as="a"
          href="https://wa.me/5561992319872"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <>
            <span>Fale conosco</span>
            <MdSend size={24} />
          </>
        </ContactButton>
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
