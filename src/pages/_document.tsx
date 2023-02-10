import { Html, Head, Main, NextScript } from 'next/document'
import Header from './global/header'
import Footer from './global/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script type="text/javascript" src="/static/animation.js" async></script>
      </Head>
      <body className="overflow-x-hidden">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
