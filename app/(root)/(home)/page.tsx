import ScrollAnimationSection from '@/components/ScrollAnimationSection'
import React from 'react'
import HeaderxPara from '@/components/HeaderxPara'

const page = () => {
  return (
    <>
      <section className=''>
        <div className='bg-white '>

      <div className="bg-cover bg-center h-screen " style={{ backgroundImage: 'url("/images/trial.jpg")' }}>
      {/* Your content goes here */}
      <div className=''>
      <HeaderxPara title='OPEN' subtitle='for expansive ideas' para='We foster deep thinking and a passion for pursuing original ideas.' />
      </div>
    </div>
    </div>
      </section>
    </>
  )
}

export default page
