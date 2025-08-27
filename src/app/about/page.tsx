import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Page",
  description: "This is about page"
}

export default function Page() {
  return (
    <div className='h-screen flex items-center justify-center'>
        <h1 className='text-6xl'>About Page</h1>
    </div>
  )
}
