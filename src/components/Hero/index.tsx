import { hero_square } from '@constants'
import { ContactButton } from 'components/ContactButton'
import Image from 'next/future/image'
import { MdSend } from 'react-icons/md'
import { HeroVectors } from './HeroVectors'
import {
  HeroCallToAction,
  HeroContainer,
  HeroSquareImageContainer,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroSquareImageContainer>
        <Image src={hero_square} alt="Losango azul com baixa opacidade" />
      </HeroSquareImageContainer>

      <HeroCallToAction
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Foco no Crescimento!</h2>

        <p>Design e Estratégias de marketing para escalar seu negócio!</p>

        <ContactButton
          as="a"
          href="https://wa.me/5561992319872"
          target="_blank"
          rel="noreferrer noopener nofollow"
          title="WhatsApp da UpDuo"
        >
          <>
            <span>Fale conosco</span>
            <MdSend size={24} />
          </>
        </ContactButton>
      </HeroCallToAction>

      <HeroVectors />

      {/* <HeroImageContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: [0, 20], opacity: [1, 1] }}
        transition={{
          delay: 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <Image
          src={hero}
          alt="Mulher olhando para alguns gráficos ao redor em azul e verde."
        />
      </HeroImageContainer> */}
    </HeroContainer>
  )
}
