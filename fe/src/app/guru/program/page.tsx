import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutPage';
import Content from '@/app/content';

export const metadata: Metadata = {
    title: 'My Program',
}
  
export default function programPage() {
    return (
        <>
            <LayoutPage>
               <Content/>
            </LayoutPage>
        </>
  )
}
