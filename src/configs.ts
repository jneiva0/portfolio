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
    imagem: 'react.png',
  },
]
