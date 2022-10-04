import Image from 'next/future/image'
import { HeaderContainer, HeaderContent } from './styles'

import upduo_logo_white from 'assets/upduo_logo_white.svg'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={upduo_logo_white} alt="UpDuo Logo" />

        <nav>
          <Link href="#services">Serviços</Link>
          <Link href="#testimonials">Depoimentos</Link>
          <Link href="#portfolio">Portfolio</Link>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
