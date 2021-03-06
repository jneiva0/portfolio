import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import { projectList } from 'configs'
import { ProjectCard } from './ProjectCard'

export const ProjectSection = () => {
  return (
    <Box w='full' mt={4} px={4} textAlign='left'>
      <Heading fontSize='2xl'>Projetos</Heading>
      <Divider mt={2} mb={5} />
      <Stack spacing={5}>
        {projectList.map(project => (
          <ProjectCard key={project.nome} project={project} />
        ))}
      </Stack>
    </Box>
  )
}
