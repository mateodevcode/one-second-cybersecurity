import Autor from '@/components/blog/Autor'
import ImgCompleta from '@/components/blog/ImgCompleta'
import Parrafo from '@/components/blog/Parrafo'
import Subtitulo from '@/components/blog/Subtitulo'
import Titulo from '@/components/blog/Titulo'
import VideoLink from '@/components/blog/VideoLink'
import React from 'react'

const page = () => {
  return (
    <div className='lg:w-7/12 md:w-7/12 sm:w-11/12 flex flex-col justify-start items-start'>
        <Titulo />
        <Autor />
        <ImgCompleta />
        <Subtitulo nombre="Introducción" />
        <Parrafo />
        <VideoLink />
        <Subtitulo nombre="¿Qué es JavaScript?" />
        <Parrafo />
    </div>
  )
}

export default page