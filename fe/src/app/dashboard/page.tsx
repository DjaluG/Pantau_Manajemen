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
            <LayoutPage>
               <Content/>
            </LayoutPage>
        </>
  )
}
