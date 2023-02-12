import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/fonts/satoshi/css/satoshi.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
