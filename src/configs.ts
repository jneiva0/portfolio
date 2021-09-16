export const MAX_WIDTH = 900

export type Skill = {
  nome: string
  imagem: string
  descricao: string
  link: string
}

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
    nome: 'NodeJS',
    descricao: 'Backend',
    link: 'https://nodejs.org/',
    imagem: '/nodejs.svg',
  },
  {
    nome: 'JavaScript',
    descricao: 'Linguagem',
    link: 'https://www.javascript.com/',
    imagem: '/javascript.png',
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
