import { Metadata } from 'next'
import React from 'react'
// import Profile from '../components/ProfileMenu'
import LayoutKs from '../LayoutKs';
import Content from '@/app/content';

export const metadata: Metadata = {
    title: 'My Program',
}
  
export default function programPage() {
    return (
        <>
            <LayoutKs>
               <Content/>
            </LayoutKs>
        </>
  )
}
