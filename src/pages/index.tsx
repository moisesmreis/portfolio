import Head from 'next/head'
import Cta from './home/cta'
import Nav from './home/nav'
import Timeline from './home/timeline'
import ButtonCta from './components/buttonCta'

export default function Home() {
  return (
    <>
      <Head>
        <title>La Monhang</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cta />
      <Nav />
      <Timeline />
      <section id="home-bottom=" className="flex-col-start gap-6 p-12" >
        <h1 className="title-big">E aí? Consegui te convencer a trabalhar comigo? É só enviar uma mensagem que marcaremos uma reunião</h1>
      </section>
    </>
  )
}
