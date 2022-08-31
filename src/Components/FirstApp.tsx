import React from 'react'

export interface firstAppProps{
  titulo: string,
  subtitulo?: string
}


const FirstApp: React.FC<firstAppProps> = ({titulo, subtitulo}) => {
  return (
    <>
      <h1 data-testid='title'> {titulo} </h1>
      <p data-testid='subtitle0'>{subtitulo}</p>
      <p data-testid='subtitle1'>{subtitulo}</p>
    </>
  )
}

export default FirstApp
