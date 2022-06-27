import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <body>
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
