import { MotionBox } from 'components/motion'
import { Skill } from 'configs'
import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Image,
  Text,
  HStack,
  useColorModeValue,
  Link,
  VStack,
} from '@chakra-ui/react'

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <NextLink href={skill.link} passHref>
        <Link isExternal _hover={{ color: 'blue.500' }}>
          <HStack
            p={4}
            bg={useColorModeValue('white', 'gray.800')}
            rounded='lg'
            borderWidth={1}
            shadow='md'
            _hover={{ shadow: 'lg' }}
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
            <Box rounded='lg' p={2} overflow='hidden' bg='gray.100'>
              <Image
                src={skill.imagem}
                alt={skill.nome}
                fallbackSrc='https://via.placeholder.com/150'
                boxSize={26}
              />
            </Box>
            <VStack
              align='start'
              justify='flex-start'
              spacing={1}
              maxW='lg'
              h='100%'
            >
              <VStack spacing={0} align='start' flexGrow={1}>
                <Text fontWeight='bold' fontSize='md' noOfLines={2}>
                  {skill.nome}
                </Text>
                <Text
                  fontSize='sm'
                  color={useColorModeValue('gray.500', 'gray.200')}
                >
                  {skill.descricao}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Link>
      </NextLink>
    </MotionBox>
  )
}
