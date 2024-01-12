import Header from '@/Components/Header'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Header />
    <main className='min-h-screen'>
      {children}
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default layout
