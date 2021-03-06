import { Avatar, Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { LinkButton } from 'components/Layout/LinkButton'
import { Page } from 'components/Layout/Page'
import { MotionBox } from 'components/motion'
import { ProjectSection } from 'components/ProjectSection'
import type { NextPage } from 'next'

const duration = 0.5

const Home: NextPage = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400')

  return (
    <Page title='Full Stack Developer' titleTemplate='João Vitor Neiva | %s'>
      <Flex as='section' flexDir='column' py={4} align='center' textAlign='center'>
        <MotionBox
          opacity='0'
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration,
            },
          }}
          mt={5}
          mb={2}
        >
          <Avatar
            size='2xl'
            src={'https://avatars.githubusercontent.com/u/10120652?v=4'}
            name='João Neiva'
          />
        </MotionBox>
        <Box>
          <Heading as='h1' fontSize='2xl' fontWeight='500' py='2'>
            Bem vindo!{' '}
            <span role='img' aria-label='hand'>
              👋🏻
            </span>
          </Heading>
          <Text py='4'>
            Meu nome é{' '}
            <Text as='span' fontWeight='600'>
              João Vitor
            </Text>{' '}
            e eu sou um Programador{' '}
            <Text as='span' fontWeight='600'>
              Full Stack
            </Text>{' '}
          </Text>
          <Heading fontSize={['xl', '2xl']} fontWeight='700'>
            Eu desenvolvo Web Apps{' '}
            <Text as='span' color={color}>
              modernos
            </Text>{' '}
            com foco na experiência do usuário.
          </Heading>
        </Box>
        <LinkButton href='/stack' my={5} variant='ghost' colorScheme='telegram' w='full' maxW='md'>
          Conheça minha Tech Stack
        </LinkButton>
        <ProjectSection />
      </Flex>
    </Page>
  )
}

export default Home
