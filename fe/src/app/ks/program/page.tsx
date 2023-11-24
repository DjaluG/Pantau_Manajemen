import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutKs';
import Image from 'next/image';
export const metadata: Metadata = {
    title: 'My Program',
}
  
export default function programPage() {
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
                                Waka. Kurikulum, Ka. Komp. Li. APK, Ka. Komp. Li. RPL, Ka. Komp. Li. TKJ, Ka. Komp. Li. MMD, Koordinator Mapel, Guru Mapel
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
                                Waka. Kesiswaan, Pembina Akhlak Mulia, Pembina Pramuka, Pembina Latih Pramuka, Pembina OSIS, Koordinator BK dan Pengembangan Diri, Koordinasi
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
                                Manajer Sarpras, Pelaksana Sarpras, Kepala Lab & Server, Teknisi Perawalan dan Perbaikan Peralatan
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/tahu.png'} alt={'tahu'} height={40} width={40}></Image>
                        </div>
                        <div>
                        <p className='text-l font-bold'>Tata Usaha dan Humas</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Manajer TU dan HUMAS, Pelaksana Keuangan dan Kerumahtanggaan, Pelaksana Kepegawaian, Pelaksana Kurikulum, Pelaksana Kesiswaan, Pembangunan
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/bkkhu.png'} alt={'bkk'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>BKK dan Hubinak</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Manajer BKK & Hubinak
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/pedi.png'} alt={'pedi'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Pelayanan Data dan Informasi</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Manajer Pedatin, Pelaksana Perpustakaan, Pelaksana
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/mamu.png'} alt={'mamu'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Manajemen Mutu</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Wa. Manajemen Mutu
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row border-b-[1px] mt-[10px]'>
                        <div className='flex pr-3 items-center'>
                            <Image src={'/images/kepsek/keli.png'} alt={'kesehatan'} height={40} width={40}></Image>
                        </div>
                        <div>
                            <p className='text-l font-bold'>Kesehatan dan Lingkungan</p>
                            <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                Manajer Kesling, Pembina Pendidikan Berkelanjutan, Pembina Unit Kesehatan Sekolah (UKS), Pelaksana Lingkungan
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        </>
  )
}
