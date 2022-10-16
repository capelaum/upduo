import { styled } from 'styles/themes/default'

export const ContactButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',

  fontSize: '$lg',
  textTransform: 'uppercase',
  borderRadius: 8,
  padding: '1rem 2rem',

  transition: 'all 0.2s ease-in-out',

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',

        '&:hover': {
          backgroundColor: '$green200',
        },
      },
      secondary: {
        color: '$green500',
        backgroundColor: '$white',

        '&:hover': {
          backgroundColor: '$gray100',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
