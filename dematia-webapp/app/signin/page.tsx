import SignIn from '@/components/sign-in'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
        <label className='text-xl text-purple-700'>Sign in</label>
        <SignIn/>
    </main>
  )
}

export default page