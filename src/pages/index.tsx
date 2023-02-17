import Head from 'next/head'
import Header from './global/header'
import Cta from './home/cta'
import Nav from './home/nav'
import Timeline from './home/timeline'
import Footer from './global/footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>La Monhang // Buenevido 👋</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Moisés Reis // Trabalhe comigo 🤙" />
        <meta property="og:url" content="https://lamonhang.vercel.app/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:description" content="Vamos tirar sua ideia do papel" />
      </Head>
      <Header />
      <Cta />
      <Nav />
      <Timeline />
      <Footer />
    </>
  )
}
