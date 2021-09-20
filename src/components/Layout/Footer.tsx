import { Text, HStack, IconButton, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <VStack mt={8} mb={2}>
      <HStack>
        <Link href='https://github.com/jneiva0/' isExternal>
          <IconButton aria-label='GitHub' icon={<FaGithub />} />
        </Link>
        <Link href='https://www.linkedin.com/in/jneiva0/' isExternal>
          <IconButton aria-label='LinkedIn' icon={<FaLinkedin />} />
        </Link>
        <Link href='mailto:jneiva42@gmail.com' isExternal>
          <IconButton aria-label='Email' icon={<FaEnvelope />} />
        </Link>
        <Link href='https://instagram.com/jv.neiva/' isExternal>
          <IconButton aria-label='Instagram' icon={<FaInstagram />} />
        </Link>
      </HStack>
      <Text fontSize='sm'>© 2021 João Vitor Neiva</Text>
    </VStack>
  )
}
