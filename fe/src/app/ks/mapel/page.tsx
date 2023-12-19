'use client'

import React, { useState } from 'react'
import LayoutKs from '../LayoutKs'
import { IoPerson } from "react-icons/io5";

export default function mapelPage() {

  return (
    <>
        <LayoutKs>
            <div className='flex flex-col items-center'>
                <div className='w-[60%] mb-4'>
                    <p className='font-bold text-lg flex'>Ka. Komp. Li. RPL</p>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
                <div className='bg-white border-[1px] w-[60%] rounded-xl shadow-md my-1'>  
                    <div className='flex flex-row p-3'>      
                        <IoPerson className='text-xl'/>      
                        <p className="ml-2 font-bold text-sm underline">Juliana Mansur, M.Kom.</p>
                    </div>
                </div>
            </div>
        </LayoutKs>
    </>
  )
}
