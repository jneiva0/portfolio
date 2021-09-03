import { Avatar, Flex } from '@chakra-ui/react'
import { Page } from 'components/Layout/Page'
import { MotionBox } from 'components/motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const duration = 0.5

const Home: NextPage = () => {
  return (
    <Page>
      <Flex flexDir='column' align='center'>
        <Flex flexDir={['column', 'column', 'row']}>
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
            m='auto'
            mb={[16, 16, 'auto']}
          >
            <Avatar
              size={'2xl'}
              src={'https://avatars.githubusercontent.com/u/10120652?v=4'}
            />
          </MotionBox>
        </Flex>
      </Flex>
    </Page>
  )
}

export default Home
