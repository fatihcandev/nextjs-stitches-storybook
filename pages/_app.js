import { globalStyles } from '@/styles/globals'
import useStore from 'hooks/useStore'
import { darkTheme } from 'stitches.config'

function MyApp({ Component, pageProps }) {
  globalStyles()
  const theme = useStore(state => state.theme)

  return (
    <div className={theme === 'dark' ? darkTheme : undefined}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
