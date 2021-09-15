import { Box } from '@chakra-ui/react'
import { Header } from 'components/Layout/Header'
import { MAX_WIDTH } from 'configs'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box maxW={MAX_WIDTH} px={[4, 6, 8, 12, 16]} mx='auto'>
        {children}
      </Box>
      {/* <Footer /> */}
    </>
  )
}
