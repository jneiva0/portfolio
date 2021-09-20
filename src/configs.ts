export const MAX_WIDTH = 900

export type Skill = {
  nome: string
  imagem: string
  descricao: string
  link: string
}

export type Project = {
  tags: string[]
  repo?: string
} & Skill

export const skillList: Skill[] = [
  {
    nome: 'React',
    descricao: 'Desenvolvimento Web',
    link: 'https://reactjs.org/',
    imagem: '/react.png',
  },
  {
    nome: 'TypeScript',
    descricao: 'Linguagem',
    link: 'https://www.typescriptlang.org/',
    imagem: '/typescript.png',
  },
  {
    nome: 'JavaScript',
    descricao: 'Linguagem',
    link: 'https://www.javascript.com/',
    imagem: '/javascript.png',
  },
  {
    nome: 'NodeJS',
    descricao: 'Backend',
    link: 'https://nodejs.org/',
    imagem: '/nodejs.svg',
  },
  {
    nome: 'Express',
    descricao: 'Backend',
    link: 'https://expressjs.com/',
    imagem: '/express.png',
  },
  {
    nome: 'NestJS',
    descricao: 'Backend',
    link: 'https://nestjs.com/',
    imagem: '/nest.svg',
  },
  {
    nome: 'PostgreSQL',
    descricao: 'Banco de Dados',
    link: 'https://www.postgresql.org/',
    imagem: '/postgresql.png',
  },
  {
    nome: 'MySQL',
    descricao: 'Banco de Dados',
    link: 'https://www.mysql.com/',
    imagem: '/mysql.png',
  },
  {
    nome: 'Vim / Neovim',
    descricao: 'IDE',
    link: 'https://neovim.io/',
    imagem: '/vim.png',
  },
  {
    nome: 'VSCode',
    descricao: 'IDE',
    link: 'https://code.visualstudio.com/',
    imagem: '/vscode.png',
  },
  {
    nome: 'Chakra UI',
    descricao: 'UI Library',
    link: 'https://chakra-ui.com/',
    imagem: '/chakra.png',
  },
]

export const projectList: Project[] = [
  {
    nome: 'Baixa Música',
    descricao:
      'Um site para fazer download de músicas a partir do YouTube. Você coloca o link e a API extrai um arquivo .mp3 a partir do vídeo e disponibiliza para download.',
    imagem: '/react.png',
    link: 'https://baixa-musica.vercel.app',
    tags: ['React', 'Node', 'TypeScript', 'NestJS'],
  },
  {
    nome: 'Portfólio',
    descricao:
      'Meu site e Portfólio pessoal, desenvolvido com React, Chakra UI e NextJS.',
    imagem: '/react.png',
    link: 'https://jvneiva.vercel.app',
    tags: ['React', 'NextJS', 'TypeScript', 'Chakra UI'],
    repo: 'https://github.com/jneiva0/portfolio',
  },
]
