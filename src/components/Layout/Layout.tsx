import { Box } from '@chakra-ui/react'
import { Header } from 'components/Layout/Header'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box
        textAlign='center'
        fontSize='xl'
        w={['90%', '85%', '80%']}
        maxW={900}
        mx='auto'
      >
        <Box pt={7} pb={10}>
          {children}
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  )
}
