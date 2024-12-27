import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <div className='flex items-center gap-3'>
            <Image src={"/dematia.svg"} height={50} width={50} alt='DematIA icon'/>
            <label className='font-semibold'>DematIA</label>
        </div>
        <Link href={"/signin"}>
            <button className='bg-purple-700 p-2 rounded-lg text-white font-bold'>
                Sign In / Register
            </button>
        </Link>
    </nav>
  )
}

export default Navbar