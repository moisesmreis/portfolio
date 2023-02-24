import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="font-body text-[#333333] bg-white dark:bg-[#292b2f] dark:text-[#fafafa] overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
