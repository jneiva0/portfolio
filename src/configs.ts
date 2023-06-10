import { DefaultSeoProps } from 'next-seo'

export const MAX_WIDTH = 900

type Item = {
  nome: string
  descricao: string
  link: string
}

export type Skill = {
  imagem: string
} & Item

export type Project = {
  tags: string[]
  repo?: string
} & Item

export const skillList: Skill[] = [
  {
    nome: 'React',
    descricao: 'Desenvolvimento Web',
    link: 'https://reactjs.org/',
    imagem: '/react.png',
  },
{
    nome: 'React Native',
    descricao: 'Mobile',
    link: 'https://reactnative.dev/',
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
    nome: 'Tailwind CSS',
    descricao: 'UI',
    link: 'https://tailwindcss.com/',
    imagem: '/tailwind.svg',
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
    descricao: 'UI',
    link: 'https://chakra-ui.com/',
    imagem: '/chakra.png',
  },
]

export const projectList: Project[] = [
  {
    nome: 'Ponder',
    descricao:
      'Ponder é um app simples, visando ser uma forma rápida para qualquer pessoa anotar seus pensamentos.  Pode ser usado como agenda, lista de tarefas ou apenas um lugar para salvar anotações.',
    link: 'https://ponder.jneiva.dev',
    tags: ['React', 'TypeScript', 'Firebase'],
    repo: 'https://github.com/jneiva0/ponder',
  },
  {
    nome: 'Portfólio',
    descricao:
      'Meu site e Portfólio pessoal, desenvolvido com React, Chakra UI e NextJS.',
    link: 'https://jneiva.dev',
    tags: ['React', 'NextJS', 'TypeScript', 'Chakra UI'],
    repo: 'https://github.com/jneiva0/portfolio',
  },
]

export const SeoConfig: DefaultSeoProps = {
  title: 'Full Stack Developer',
  titleTemplate: '%s | João Vitor Neiva',
  description: 'Site pessoal do João Vitor Neiva, Full Stack Developer.',
  canonical: 'https://jneiva.dev/',

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jneiva.dev/',
    site_name: 'João Vitor Neiva',
    title: 'Programador Full Stack',
    description: 'Site pessoal do João Vitor Neiva, Full Stack Developer.',

    images: [
      {
        url: 'https://jneiva.dev/og-image.jpg',
        width: 1200,
        height: 500,
        alt: 'João Vitor Neiva',
      },
    ],
  },
  robotsProps: {},
}
