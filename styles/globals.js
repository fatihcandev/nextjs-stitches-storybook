import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },

  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
