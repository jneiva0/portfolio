import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { LinkButton } from 'components/Layout/LinkButton'
import { Page } from 'components/Layout/Page'
import { MotionBox } from 'components/motion'
import { ProjectSection } from 'components/ProjectSection'
import type { GetStaticProps, NextPage } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const animationDuration = 0.5

const HomePage: NextPage = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400')

  const { t } = useTranslation('common')

  return (
    <Page title='Full Stack Developer' titleTemplate='João Vitor Neiva | %s'>
      <Flex
        as='section'
        flexDir='column'
        py={4}
        align='center'
        textAlign='center'
      >
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
              animationDuration,
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
            {t('welcome')}{' '}
            <span role='img' aria-label='hand'>
              👋🏻
            </span>
          </Heading>
          <Text py={4}>
            <Trans i18nKey='intro' />
          </Text>

          <Heading fontSize={['xl', '2xl']} fontWeight='700'>
            <Trans
              i18nKey='focus'
              components={{ 1: <Text as='span' color={color} /> }}
            />
          </Heading>
        </Box>
        <LinkButton
          href='/stack'
          my={5}
          variant='ghost'
          colorScheme='telegram'
          w='full'
          maxW='md'
        >
          {t('meetMyStack')}
        </LinkButton>
        <ProjectSection />
      </Flex>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default HomePage
