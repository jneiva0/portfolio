import { Box, ChakraProvider } from '@chakra-ui/react'
import '@fontsource/poppins'
import { Layout } from 'components/Layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { tema } from 'lib/tema'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
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
