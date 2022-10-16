import { HeaderDropdownMenu } from 'components/HeaderDropdownMenu'
import Image from 'next/future/image'
import Link from 'next/link'
import { HeaderContainer, HeaderContent } from './styles'

import upduo_logo_white from 'assets/upduo_logo_white.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" passHref>
          <div>
            <Image src={upduo_logo_white} alt="UpDuo Logo" height={75} />
          </div>
        </Link>

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
