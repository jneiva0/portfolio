import { HStack, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { MotionBox } from 'components/motion'
import { Skill } from 'configs'
import NextLink from 'next/link'
import React from 'react'
import { ImageBox } from './ImageBox'

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
            <ImageBox alt={skill.nome} imagem={skill.imagem} />
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
