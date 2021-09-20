import { globalStyles } from '@/styles/globals'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
