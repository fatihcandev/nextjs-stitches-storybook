import { styled } from 'stitches.config'

/**
 * Renders a button component
 * @param {string} type - the type of the button. can be primary or secondary.
 * @param {string} size - the type of the button. can be xs, sm, md, lg or xl.
 */

const Button = ({ type, size, children, ...props }) => {
  return (
    <Container type={type} size={size} {...props}>
      {children}
    </Container>
  )
}

export default Button

const Container = styled('button', {
  boxShadow: '$button',
  borderRadius: '$1',
  outline: 'none',

  '&:focus': {
    boxShadow: '$buttonFocus',
  },

  variants: {
    type: {
      primary: {
        backgroundColor: '$primaryButtonBg',
        color: '$white',
        border: 'none',

        '&:hover': {
          backgroundColor: '$primaryButtonHoverBg',
        },
      },
      secondary: {
        backgroundColor: '$secondaryButtonBg',
        color: '$secondaryButtonText',
        border: '1px solid $secondaryButtonBorder',

        '&:hover': {
          backgroundColor: '$secondaryButtonHoverBg',
        },
      },
    },
    size: {
      xs: {
        p: '7px 11px',
        fontSize: '12px',
        lineHeight: '16px',
      },
      sm: {
        p: '9px 13px',
        fontSize: '14px',
        lineHeight: '16px',
      },
      md: {
        p: '9px 17px',
        fontSize: '14px',
        lineHeight: '20px',
      },
      lg: {
        p: '9px 17px',
        fontSize: '16px',
        lineHeight: '24px',
      },
      xl: {
        p: '13px 25px',
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'sm',
  },
})
