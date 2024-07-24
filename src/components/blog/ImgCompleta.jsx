import React from 'react'
import img01 from '@/img/javascript-banner.jpeg'
import Image from 'next/image'


const ImgCompleta = () => {
  return (
    <div className='mt-10'>
        <Image src={img01} alt="Imagen completa" className="w-full h-full" />
    </div>
  )
}

export default ImgCompleta