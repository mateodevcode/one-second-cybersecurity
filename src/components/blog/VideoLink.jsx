import Link from 'next/link'
import React from 'react'

const VideoLink = () => {
  return (
    <p className='lg:text-xl md:text-xl sm:text-base mt-5 dark:text-white leading-relaxed'>
        Video: <Link href="https://www.youtube.com/watch?v=2Ji7z8pJf7k" className='text-blue-700'>¿Qué es JavaScript?</Link>
    </p>
  )
}

export default VideoLink