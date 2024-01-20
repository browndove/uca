"use client"
import React, { useEffect } from 'react';
import HeaderxPara from '@/components/HeaderxPara';

const Page = () => {
  useEffect(() => {
    const scrollThreshold = -30;
  
    const handleScroll = () => {
      const scrollTop = window.scrollY;
  
      // Adjust scroll position based on scroll direction
      if (scrollTop > scrollThreshold) {
        // Scroll down
        window.scrollTo(0, scrollTop + scrollThreshold);
      } else {
        // Scroll up
        window.scrollTo(0, Math.max(0, scrollTop - Math.abs(scrollThreshold)));
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <section className=''>
        <div className="bg-cover bg-center h-screen z-20 " style={{ backgroundImage: 'url("/images/campus.jpg")' }}>
          <div className="absolute top-[25%] left-[20%]">
            <HeaderxPara title='OPEN' subtitle='for expansive ideas' para='We foster deep thinking and a passion for pursuing good ideas.' />
          </div>
        </div>
      </section>

      {/* second bg */}
      <section className=''>
        <div className="bg-cover bg-center h-screen z-20 " style={{ backgroundImage: 'url("/images/kids.jpg")' }}>
          <div className="absolute top-[125%] left-[20%]">
            <HeaderxPara title='OPEN' subtitle='for learning ' para='We forage connections between people ideas and the world beyond the classroom' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
