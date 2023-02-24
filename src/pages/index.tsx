import Head from 'next/head'
import Header from '../components/header'
import Cta from '../components/cta'
import Services from '../components/services'
import Timeline from '../components/timeline'
import Footer from '../components/footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>La Monhang // Buenevido 👋</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Olá // Trabalhe comigo 🤙" />
        <meta property="og:url" content="https://lamonhang.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:description" content="Vamos tirar sua ideia do papel" />
      </Head>
      <Header />
      <Cta />
      <Services />
      <Timeline />
      <Footer />
    </>
  )
}
