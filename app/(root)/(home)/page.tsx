import ScrollAnimationSection from '@/components/ScrollAnimationSection'
import Image from 'next/image'
import React from 'react'
import trail from "@/public/images/trial.jpg"

const page = () => {
  return (
    <>
      <section className=''>
        <div className='bg-white '>

      <div className="bg-cover bg-center h-screen " style={{ backgroundImage: 'url("/images/trial.jpg")' }}>
      {/* Your content goes here */}
    </div>
    </div>
      </section>
    </>
  )
}

export default page
