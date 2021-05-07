import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
