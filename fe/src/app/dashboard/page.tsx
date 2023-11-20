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
            <div className='p-5 justify-center'>
                <p className='mx-5 font-medium text-md mt-4'>Welcome Yayu Rahayu, S.Pd. !</p>
                <div className='flex flex-row max-lg:flex-wrap mt-8'>
                    <div className='flex flex-wrap lg:w-[50%]'>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                        <div className='bg-white shadow-md px-3 pr-16 py-3 pb-1 rounded-2xl mx-2 my-2'>
                            <p className='text-xs text-[#838383]'>Task Done</p>
                            <p className='font-bold text-xl py-2'>34</p>
                        </div>
                    </div>
                    <div className='lg:w-[50%]'>
                        <Charts/>
                    </div>
                </div>
            </div>
            </LayoutPage>
        </>
  )
}
