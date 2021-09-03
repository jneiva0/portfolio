import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { tema } from 'lib/tema'
import React from 'react'
import { Layout } from 'components/Layout/Layout'
import { useRouter } from 'next/dist/client/router'
import { AnimatePresence } from 'framer-motion'
import '@fontsource/poppins'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
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
  )
}
export default MyApp
