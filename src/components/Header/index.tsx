import { HeaderDropdownMenu } from 'components/HeaderDropdownMenu'
import Image from 'next/future/image'
import Link from 'next/link'
import { HeaderContainer, HeaderContent, NavLink } from './styles'

import upduo_logo_white from 'assets/upduo_logo_white.svg'

interface HeaderProps {
  sectionsInView: {
    isServicesInView: boolean
    isTestimonialsInView: boolean
    isPortfolioInView: boolean
  }
}

export function Header({ sectionsInView }: HeaderProps) {
  const { isServicesInView, isTestimonialsInView, isPortfolioInView } =
    sectionsInView

  const isServicesActive = !isTestimonialsInView && isServicesInView

  const isTestimonialsActive = isTestimonialsInView

  const isPortfolioActive = !isTestimonialsInView && isPortfolioInView

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" passHref>
          <div>
            <Image src={upduo_logo_white} alt="UpDuo Logo" height={75} />
          </div>
        </Link>

        <nav>
          <Link href="#services" scroll={false} passHref>
            <NavLink active={isServicesActive}>Serviços</NavLink>
          </Link>
          <Link href="#testimonials" scroll={false} passHref>
            <NavLink active={isTestimonialsActive}>Depoimentos</NavLink>
          </Link>
          <Link href="#portfolio" scroll={false} passHref>
            <NavLink active={isPortfolioActive}>Portfolio</NavLink>
          </Link>
        </nav>

        <HeaderDropdownMenu />
      </HeaderContent>
    </HeaderContainer>
  )
}
