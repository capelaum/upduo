import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { MdMenu } from 'react-icons/md'
import {
  DropdownMenuItem,
  IconButton,
  StyledArrow,
  StyledContent,
} from './styles'

interface DropdownMenuContentProps
  extends ComponentProps<typeof StyledContent> {
  children: ReactNode
}

function DropdownMenuContent({ children, ...props }: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  )
}

export const HeaderDropdownMenu = () => {
  return (
    <>
      <DropdownMenuPrimitive.Root modal={false}>
        <DropdownMenuPrimitive.Trigger asChild>
          <IconButton aria-label="Menu de Navegação" title="Abrir menu">
            <MdMenu size={36} />
          </IconButton>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuContent sideOffset={0}>
          <DropdownMenuItem>
            <Link href="#services" scroll={false}>
              Serviços
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#testimonials" scroll={false}>
              Depoimentos
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#portfolio" scroll={false}>
              Portfolio
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPrimitive.Root>
    </>
  )
}
