import { Metadata } from 'next'
import React from 'react'
// import Profile from '../components/ProfileMenu'
import LayoutPage from '../LayoutPage';
import Charts from './Chart'

export const metadata: Metadata = {
    title: 'Dashboard',
}
  
export default function dashboardPage() {
    return (
        <>
            <LayoutPage>
            <div className='flex flex-col gap-[30px]'>
                <p className='font-medium text-md'>Welcome Yayu Rahayu, S.Pd. !</p>
                <div className='grid grid-cols-2 gap-[15px] max-lg:grid-cols-1'>
                    <div className='grid gap-[15px] max-md:grid-cols-2 grid-cols-3'>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl py-[20px] px-[15px]'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                    </div>
                    <div className=''>
                        <Charts/>
                    </div>
                </div>
            </div>
            </LayoutPage>
        </>
  )
}
