import { Html, Head, Main, NextScript } from 'next/document'
import Header from './global/header'
import Footer from './global/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
