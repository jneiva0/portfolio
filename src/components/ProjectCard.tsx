import { LinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Project } from 'configs'

export const ProjectCard = ({ project }: { project: Project }) => (
  <Box shadow='md' borderWidth={1} rounded='md' py={3} px={3}>
    <VStack h='full' align='start' justify='flex-start'>
      <Box w='full'>
        <HStack>
          <Text fontSize='xl'>{project.nome}</Text>
        </HStack>
        <Divider />
      </Box>
      <Box>
        <Text fontSize='sm'>{project.descricao}</Text>
      </Box>
      <HStack>
        <Wrap shouldWrapChildren>
          {project.tags.map(tag => (
            <Tag variant='solid' key={tag}>
              {tag}
            </Tag>
          ))}
        </Wrap>
      </HStack>
      <Divider />
      <LinkBox w='full'>
        <LinkOverlay href={project.link} isExternal>
          <Button w='full' variant='solid' colorScheme='telegram' rightIcon={<LinkIcon />}>
            Acessar
          </Button>
        </LinkOverlay>
      </LinkBox>
      {project.repo && (
        <LinkBox w='full'>
          <LinkOverlay href={project.repo} isExternal>
            <Button
              w='full'
              variant='solid'
              // colorScheme='telegram'
              rightIcon={<LinkIcon />}
            >
              Repo Github
            </Button>
          </LinkOverlay>
        </LinkBox>
      )}
    </VStack>
  </Box>
)
