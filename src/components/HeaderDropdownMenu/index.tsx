import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { ComponentProps, ReactNode, useState } from 'react'
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
  const [open, setOpen] = useState(false)

  const closeDropdown = () => setOpen(false)
  const toggleDropdown = () => setOpen(!open)

  return (
    <>
      <DropdownMenuPrimitive.Root modal={false} open={open}>
        <DropdownMenuPrimitive.Trigger asChild onClick={toggleDropdown}>
          <IconButton aria-label="Menu de Navegação" title="Abrir menu">
            <MdMenu size={48} />
          </IconButton>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuContent
          sideOffset={0}
          onFocusOutside={closeDropdown}
          onInteractOutside={closeDropdown}
        >
          <DropdownMenuItem onClick={closeDropdown}>
            <Link href="#services" scroll={false}>
              Serviços
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={closeDropdown}>
            <Link href="#testimonials" scroll={false}>
              Depoimentos
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={closeDropdown}>
            <Link href="#portfolio" scroll={false}>
              Portfolio
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPrimitive.Root>
    </>
  )
}
