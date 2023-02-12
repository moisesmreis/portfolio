import React from 'react'
import Head from 'next/head'
import Header from './global/header'
import { Form } from './components/formContato'
import Footer from './global/footer'

export default function Contato() {

  return (
    <>
      <Head>
        <title>Fale comigo // Vamos começar a trabalhar</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <header className="flex-row-center py-12 px-12" id="contato-header">
        <h1 className="title-big max-w-[36rem]">Preencha esse formulário e entrarei em contato rapidinho ⚡</h1>
      </header>
      <section className="flex-row-center pb-12 px-12">
        <Form />
      </section>
      <Footer />
    </>
  )
}
