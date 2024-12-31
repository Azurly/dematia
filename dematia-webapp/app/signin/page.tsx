import SignIn from '@/components/sign-in'
import React from 'react'

const page = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='space-y-5 '>
        <label className='text-xl text-purple-700'>Sign in</label>
        <SignIn/>
      </div>
    </main>
  )
}

export default page