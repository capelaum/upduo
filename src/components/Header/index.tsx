import Image from 'next/future/image'
import Link from 'next/link'
import { HeaderContainer, HeaderContent } from './styles'

import upduo_logo_white from 'assets/upduo_logo_white.svg'
import { HeaderDropdownMenu } from 'components/DropdownMenu'

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

        <HeaderDropdownMenu />
      </HeaderContent>
    </HeaderContainer>
  )
}
