import Image from 'next/future/image'
import { HeaderContainer, HeaderContent } from './styles'

import upduo_logo_green from 'assets/upduo_logo_green.svg'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={upduo_logo_green} alt="UpDuo Logo" height={75} />

        <nav>
          <Link href="#services">Serviços</Link>
          <Link href="#testimonials">Depoimentos</Link>
          <Link href="#portfolio">Portfolio</Link>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
