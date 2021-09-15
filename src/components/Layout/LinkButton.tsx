import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export type LinkButtonProps = { href: string } & ButtonProps

export const LinkButton = ({ href, ...props }: LinkButtonProps) => (
  <NextLink href={href} passHref>
    <Button variant='ghost' {...props} />
  </NextLink>
)
