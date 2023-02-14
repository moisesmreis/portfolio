import Head from 'next/head'
import Header from './global/header'
import Cta from './home/cta'
import Nav from './home/nav'
import Timeline from './home/timeline'
import Contact from './home/contact'
import { Form } from './components/form'
import Footer from './global/footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>La Monhang // Uma feitoria de ideias</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Cta />
      <Nav />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}
