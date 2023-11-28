import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutPage';

export const metadata: Metadata = {
    title: 'My Task',
}
  
export default function taskPage() {
    return (
        <>
            <LayoutPage>
            </LayoutPage>
        </>
  )
}
