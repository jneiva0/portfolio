import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
}
export const tema = extendTheme({
  config,
  styles: {
    global: () => ({
      'html,body,#__next': {
        height: '100%',
      },
      'html,body': {
        fontSize: '18px',
      },
    }),
  },
  fonts: {
    body: 'Poppins, -apple-system',
    heading: 'Poppins, -apple-system',
  },
})
