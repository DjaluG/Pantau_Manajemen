import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutKs';
import Image from 'next/image';
export const metadata: Metadata = {
    title: 'My Task',
}
  
export default function taskPage() {
    return (
        <>
            <LayoutPage>
                <div className='bg-white shadow-md mx-5 px-3 py-5 rounded-3xl'>
                    <div className='flex flex-row border-b-[1px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/kur-new.png'} alt={'kurikulum'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Kurikulum</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/kessw.png'} alt={'kesiswaan'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Kesiswaan</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/bkkhu.png'} alt={'bkk'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>BKK dan Humas Sekolah</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/keli.png'} alt={'kesehatan'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Kesehatan Lingkungan</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/mamu.png'} alt={'mamu'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Mamu</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/pedi.png'} alt={'pedi'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Pedi</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/sapra.png'} alt={'sarana'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Sarana dan Prasarana</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/tahu.png'} alt={'tahu'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Humas</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi deserunt eligendi assumenda perferendis labore, quasi alias in natus,
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        </>
  )
}
