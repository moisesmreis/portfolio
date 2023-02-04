import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/fonts/satoshi/css/satoshi.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
