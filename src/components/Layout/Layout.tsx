import { Box } from '@chakra-ui/react'
import { Header } from 'components/Layout/Header'
import { MAX_WIDTH } from 'configs'
import { ReactNode } from 'react'
import { Footer } from './Footer'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Box display='flex' minH='100vh' flexDir='column'>
      <Header />
      <Box maxW={MAX_WIDTH} flex={1} px={[4, 6, 8, 12, 16]} mx='auto'>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
