import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutPage';

export const metadata: Metadata = {
    title: 'My Program',
}
  
export default function programPage() {
    return (
        <>
            <LayoutPage>
            </LayoutPage>
        </>
  )
}
