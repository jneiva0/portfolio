import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const tema = extendTheme({
  styles: {
    global: (props: any) => ({
      'html,body, #root': {
        height: '100%',
      },
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.100', 'gray.900')(props),
        fontSize: '110%',
      },
    }),
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
})
