import Image from 'next/future/image'
import { BsBehance, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import {
  FooterContainer,
  SocialContainer,
  SocialLink,
  SocialLinks,
  SquareLeft,
  SquareRight,
  UpduoContainer,
} from './styles'

import footer_square from 'assets/footer_square.svg'
import upduo_logo_white from 'assets/upduo_logo_white.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <SquareLeft>
        <Image src={footer_square} alt="Quadrados azuis." />
      </SquareLeft>

      <SquareRight>
        <Image src={footer_square} alt="Quadrados azuis." />
      </SquareRight>

      <UpduoContainer>
        <Image src={upduo_logo_white} alt="UpDuo Logo." />

        <span>
          © {currentYear} UpDuo Comunicação. <br />
          Todos os direitos reservados.
        </span>
      </UpduoContainer>

      <SocialContainer>
        <SocialLinks>
          <SocialLink
            href="https://wa.me/5561992319872"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp size={28} />
          </SocialLink>

          <SocialLink
            href="https://www.instagram.com/upduocomunicacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={28} />
          </SocialLink>

          <SocialLink
            href="https://www.behance.net/sabrinecruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBehance size={32} />
          </SocialLink>
        </SocialLinks>

        <span>
          Feito com 🤍 por{' '}
          <a
            href="https://github.com/capelaum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luís Vinicius Capelletto
          </a>
        </span>
      </SocialContainer>
    </FooterContainer>
  )
}
