import React from 'react'
import { Box, Image, Skeleton } from '@chakra-ui/react'
import { usePalette } from 'react-palette'

type Props = {
  imagem: string
  alt?: string
  size?: number | string
}

export const ImageBox = ({ imagem, alt, size = 26 }: Props) => {
  const { data, loading } = usePalette(imagem)

  return (
    <Box rounded='lg' p={2} overflow='hidden' pos='relative'>
      <Box
        bg={data.darkVibrant}
        pos='absolute'
        top={0}
        left={0}
        w='full'
        h='full'
        opacity={0.2}
      />
      {loading ? (
        <Skeleton height={size} width={size} />
      ) : (
        <Image
          src={imagem}
          alt={alt}
          fallbackSrc='https://via.placeholder.com/150'
          boxSize={size}
        />
      )}
    </Box>
  )
}
