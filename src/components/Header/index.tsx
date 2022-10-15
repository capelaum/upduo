import Image from 'next/future/image'
import { HeaderContainer, HeaderContent } from './styles'

import upduo_logo_white from 'assets/upduo_logo_white.svg'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={upduo_logo_white} alt="UpDuo Logo" height={75} />

        <nav>
          <Link href="#services" scroll={false}>
            Serviços
          </Link>
          <Link href="#testimonials" scroll={false}>
            Depoimentos
          </Link>
          <Link href="#portfolio" scroll={false}>
            Portfolio
          </Link>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
