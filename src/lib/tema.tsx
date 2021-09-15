import { extendTheme } from '@chakra-ui/react'

export const tema = extendTheme({
  styles: {
    global: () => ({
      'html,body, #root': {
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
