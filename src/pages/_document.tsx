import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import i18nextConfig from '../../next-i18next.config'

export default class AppDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
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
