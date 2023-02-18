import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/fonts/satoshi/css/satoshi.css'
import 'build.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
