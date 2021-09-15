import { Box, Flex } from '@chakra-ui/react'
import { Navbar } from 'components/Layout/Navbar'
import { MAX_WIDTH } from 'configs'
import { LinkButton } from './LinkButton'

export const Header = () => {
  return (
    <Box as='header' boxShadow='md'>
      <Flex
        h='16'
        align='center'
        justify='space-between'
        px={[4, 6, 8, 12, 16]}
        maxW={MAX_WIDTH}
        mx='auto'
      >
        <LinkButton href='/'>João Vitor Neiva</LinkButton>
        <Navbar />
      </Flex>
    </Box>
  )
}
