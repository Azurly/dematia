'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from "next-auth/react"

const Navbar = () => {

  return (
    <nav className='flex justify-between p-2'>
      <div className='flex items-center gap-3'>
        <Image src={"/dematia.svg"} height={50} width={50} alt='DematIA icon' />
        <label className='font-semibold'>DematIA</label>
      </div>
        <button onClick={() => signIn("google")} className='bg-purple-700 p-2 rounded-lg text-white font-bold'>Signin with Google</button>
        
    </nav>
  )
}

export default Navbar