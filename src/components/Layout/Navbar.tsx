import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { MobileNavContent } from 'components/Layout/MobileNavContent'
import React from 'react'
import { LinkButton } from './LinkButton'

export const Navbar = () => {
  const mobileNav = useDisclosure()

  return (
    <HStack as='nav' fontWeight='500'>
      <HStack pr={8} display={{ base: 'none', lg: 'flex' }}>
        <LinkButton href='/'>Home</LinkButton>
        <LinkButton href='/sobre'>Sobre</LinkButton>
      </HStack>
      <ColorModeToggle />
      <IconButton
        onClick={mobileNav.onOpen}
        aria-label='toggle navigation'
        display={{ base: 'block', lg: 'none' }}
        icon={<HamburgerIcon />}
        variant='ghost'
      />
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      variant='ghost'
      aria-label='toggle color mode'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  )
}
