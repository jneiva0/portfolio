import { Box, Heading, Text } from '@chakra-ui/react'
import { Page } from 'components/Layout/Page'
import { NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <Page title='Sobre'>
      <Box p={5}>
        <Heading mt={3} mb={5}>
          Sobre Mim
        </Heading>
        <Text mb={3}>Meu nome é João Vitor Neiva.</Text>
        <Text mb={3}>
          Sou uma pessoa movida pela curiosidade, amo programar e sou
          autodidata.
        </Text>
        <Text mb={3}>
          Nos últimos anos tenho trabalhado com Typescript, React e Node. Meu
          foco atual está no desenvolvimento de PWAs e Web Apps modernos com boa
          UX, sempre buscando melhorar a experiência do usuário.
        </Text>
      </Box>
    </Page>
  )
}

export default AboutPage
