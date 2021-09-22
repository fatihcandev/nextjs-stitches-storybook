import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray300: '#D1D5DB',
      gray700: '#374151',
      black50: '#0000000D',
      indigo500: '#6366F1',
      indigo600: '#4F46E5',
      indigo700: '#4338CA',
      primaryButtonBg: '$indigo600',
      primaryButtonHoverBg: '$indigo700',
      primaryButtonText: '$white',
      secondaryButtonBg: '$white',
      secondaryButtonHoverBg: '$gray50',
      secondaryButtonText: '$gray700',
      secondaryButtonBorder: '$gray300',
    },
    shadows: {
      button: '0px 1px 2px 0px $black50',
      buttonFocus:
        '0px 0px 0px 4px $indigo500, 0px 0px 0px 2px $white, 0px 1px 2px 0px $black50',
    },
    radii: {
      1: '6px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1280px)',
  },
  utils: {
    // Abbreviated margin properties
    m: value => ({
      margin: value,
    }),
    mt: value => ({
      marginTop: value,
    }),
    mr: value => ({
      marginRight: value,
    }),
    mb: value => ({
      marginBottom: value,
    }),
    ml: value => ({
      marginLeft: value,
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: value => ({
      padding: value,
    }),
    pt: value => ({
      paddingTop: value,
    }),
    pr: value => ({
      paddingRight: value,
    }),
    pb: value => ({
      paddingBottom: value,
    }),
    pl: value => ({
      paddingLeft: value,
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: value => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    radius: value => ({
      borderRadius: value,
    }),
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primaryButtonBg: '$black',
    primaryButtonText: '$white',
  },
})
