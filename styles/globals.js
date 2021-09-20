import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: 'Inter, sans-serif',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
