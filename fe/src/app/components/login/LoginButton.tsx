'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function LoginButton() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/dashboard')
    }

  return (
    <div className='flex justify-center mt-7'>
        <div className='w-[80%] rounded-lg'>
          <button type='submit' onClick={handleClick} className='btn text-[#10316B] bg-[#FFEB38] w-full font-bold text-lg py-1'>Sign In</button>
        </div>
    </div>
  )
}
export default LoginButton
