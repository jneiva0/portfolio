import { Box, ChakraProvider } from '@chakra-ui/react'
import '@fontsource/poppins'
import { GoogleAnalytics } from 'components/GoogleAnalytics'
import { Layout } from 'components/Layout/Layout'
import { SeoConfig } from 'configs'
import { AnimatePresence } from 'framer-motion'
import { tema } from 'lib/tema'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <DefaultSeo {...SeoConfig} />
      <ChakraProvider resetCSS theme={tema}>
        <Layout>
          <AnimatePresence
            onExitComplete={() => window.scrollTo(0, 0)}
            exitBeforeEnter
            initial={false}
          >
            <Box key={router.route}>
              <Component {...pageProps} />
            </Box>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
