import Link from 'next/link'
import React from 'react'

const EnlaceNavbar = ({nombre, Url, especial}) => {
  return (
    <li>
        <Link href={Url} className={`mx-1 text-lg hover:bg-white/20 px-3 py-2 rounded-md ${especial}`}>
        {nombre}
        </Link>
    </li>
  )
}

export default EnlaceNavbar