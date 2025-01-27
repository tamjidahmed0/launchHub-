import React from 'react'
import Link from 'next/link'


const Navigation = () => {
  return (
    <div className='lg:flex gap-9 text-[16px] capitalize font-medium hidden'>
        <Link href={''}>demo</Link>
        <Link href={''}>About</Link>
        <Link href={''}>blog</Link>
        <Link href={''}>pages</Link>
        <Link href={''}>contact</Link>
    </div>
  )
}

export default Navigation