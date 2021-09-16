import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { Page } from 'components/Layout/Page'
import { SkillCard } from 'components/SkillCard'
import { skillList } from 'configs'
import { NextPage } from 'next'
import React from 'react'

const StackPage: NextPage = () => {
  return (
    <Page titulo='Skills' keywords='react, typescript, node'>
      <VStack py={6} spacing={8}>
        <Box as='section'>
          <VStack>
            <Heading fontSize='3xl'>Tech Stack</Heading>
            <Text
              fontSize='lg'
              color={useColorModeValue('gray.500', 'gray.200')}
              maxW='lg'
              textAlign='center'
            >
              Uma lista das ferramentas e tecnologias que eu uso no dia a dia.
            </Text>
          </VStack>
          <Box as='section'>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
              {skillList.map(item => (
                <SkillCard key={item.nome} skill={item} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </VStack>
    </Page>
  )
}

export default StackPage
