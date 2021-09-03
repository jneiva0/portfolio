import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      px={5}
      boxShadow='md'
      w='full'
    >
      <Flex
        h={16}
        align='center'
        justify='space-between'
        w={['90%', '85%', '80%']}
        maxW={900}
        mx='auto'
      >
        <HStack align='center' spacing={6}>
          <NextLink href='/' passHref>
            <Button variant='ghost'>João Vitor Neiva</Button>
          </NextLink>
        </HStack>
      </Flex>
    </Box>
  )
}
