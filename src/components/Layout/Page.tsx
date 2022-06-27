import { motion } from 'framer-motion'
import { NextSeo, NextSeoProps } from 'next-seo'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & NextSeoProps

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const Page = ({ children, ...rest }: Props) => {
  return (
    <>
      <NextSeo {...rest} />
      <motion.main variants={variants} initial='initial' animate='enter' exit='exit'>
        {children}
      </motion.main>
    </>
  )
}
