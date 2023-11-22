import { Metadata } from 'next'
import React from 'react'
// import Profile from '../components/ProfileMenu'
import LayoutPage from '../LayoutPage';
import Content from '@/app/content';

export const metadata: Metadata = {
    title: 'My Task',
}
  
export default function taskPage() {
    return (
        <>
            <LayoutPage>
               <Content/>
            </LayoutPage>
        </>
  )
}
