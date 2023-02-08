import React from 'react'
import Head from 'next/head'
import FormContato from './components/formContato'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Fale comigo 🖁</title>
        <meta name="description" content="Uma feitoria de ideias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-96 py-12" id="contato-header">
        <h1 className="title-big">Preencha esse formulário e entrarei em contato rapidinho ⚡</h1>
      </header>
      <section className="px-96 pb-12">
        <FormContato />
      </section>
    </>
  )
}
