import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  titulo?: string
  descricao?: string
  keywords?: string
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const Page = ({ children, descricao, titulo, keywords }: Props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta
          name='keywords'
          content={keywords || 'programador, web development, developer'}
        />
        <meta
          name='description'
          content={descricao || 'Programador Full Stack. '}
        />
        <meta
          property='og:title'
          content={titulo || 'João Vitor Neiva - Programador Full Stack'}
        />
        <title>{titulo}</title>
      </Head>
      <motion.main
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        {children}
      </motion.main>
    </>
  )
}
