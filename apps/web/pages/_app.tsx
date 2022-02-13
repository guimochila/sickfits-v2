import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Page from '../components/Layout/Page'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp
