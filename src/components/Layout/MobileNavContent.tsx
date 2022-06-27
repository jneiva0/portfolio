import {
  CloseButton,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
} from '@chakra-ui/react'
import { LinkButton, LinkButtonProps } from 'components/Layout/LinkButton'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouteChanged } from 'hooks/useRouteChanged'
import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MobileNavContent = (props: Props) => {
  const { isOpen, onClose } = props

  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const color = useColorModeValue('white', 'gray.800')

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  useRouteChanged(onClose)

  useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.08 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            w='full'
            direction='column'
            bg={color}
            h='100vh'
            overflow='auto'
            pos='absolute'
            left={0}
            top={0}
            zIndex={20}
            pb={8}
          >
            <Flex justify='space-between' px='6' h={16} align='center'>
              <LinkButton href='/'>João Vitor Neiva</LinkButton>
              <CloseButton size='lg' ref={closeBtnRef} onClick={onClose} />
            </Flex>
            <Stack mt={6} spacing={4} px={6}>
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/sobre'>Sobre</NavLink>
              <NavLink href='/stack'>Tech Stack</NavLink>
            </Stack>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const NavLink = (props: LinkButtonProps) => <LinkButton justifyContent='flex-start' {...props} />
