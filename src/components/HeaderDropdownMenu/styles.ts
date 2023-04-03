import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { keyframes, styled } from 'styles/stiches.config'

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'none',

  alignItems: 'center',
  justifyContent: 'center',
  color: '$green200',
  backgroundColor: 'transparent',
  boxShadow: `0 2px 10px $black`,
  '&:hover': { color: '$green100', cursor: 'pointer' },
  '&:focus': { boxShadow: `0 0 0 2px $green200` },

  '&[data-state="open"]': {
    color: '$green100',
  },

  '@bp2': {
    display: 'inline-flex',
  },
})

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
  all: 'unset',
  fontSize: '$md',
  lineHeight: 1,
  color: '$blue700',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  fontWeight: 500,

  a: {
    flex: 1,
    padding: '0.75rem 1rem',
    textDecoration: 'none',
    color: '$blue700',

    '&:hover': {
      color: '$green100',
    },
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&[data-disabled]': {
    color: '$gray500',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$blue700',
    color: '$green100',

    a: {
      color: '$green100',
    },
  },
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 180,
  backgroundColor: '$green100',
  borderRadius: 6,
  zIndex: 3,
  padding: 5,
  marginRight: 16,
  display: 'none',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  '@bp2': {
    display: 'block',
  },
})

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$green100',
  marginRight: 16,
})
