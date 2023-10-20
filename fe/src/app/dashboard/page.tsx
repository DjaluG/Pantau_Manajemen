import { Metadata } from 'next'
import React from 'react'
// import Profile from '../components/ProfileMenu'
import LayoutPage from '../LayoutPage';
import Content from '../content'

export const metadata: Metadata = {
    title: 'Dashboard',
}
  
export default function dashboardPage() {
    return (
        <>
            <div className='bg-[#f9f9f9] h-[80vh]'>
            <LayoutPage>
                <p className='mx-5 font-black text-xl mt-4'>Welcome Yayu Rahayu, S.Pd. !</p>
                <div className='flex flex-row mt-8 ml-6'>
                    <div className='flex flex-wrap w-4/6'>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-2 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                    </div>
                        
                    </div>
            </LayoutPage>
            </div>
        </>
  )
}
