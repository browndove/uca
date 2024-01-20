"use client"
import React from 'react';
import { motion } from 'framer-motion';
import "../components/hxp.css";

const HeaderxPara = ({ title, subtitle, para }: { title: string; subtitle: string; para: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className='flex justify-center absolute'
      style={{ zIndex: 30 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className='w-[54vh] h-[54vh] bg-white ml-[-12rem] opacity-80 rounded-full'
        style={{ zIndex: 30 }}
      >
        <motion.div
          className=' w-[44vh] h-[44vh] bg-white rounded-full ml-[15rem] mt-[10rem] flex flex-col justify-center items-center opacity-90 absolute'
        >
          <motion.h3
            className='text-[#0B523F] h-full w-full ml-[9.6rem] mt-[4rem] text-[3rem]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            {title}
          </motion.h3>

          <motion.h4
            className='text-[#0B523F] font-bold mt-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
          >
            {subtitle}
          </motion.h4>

          <motion.h5
            className='text-[16px] flex flex-wrap mb-[7rem] text-center font-light px-1 mt-8 text-[#4F4F4F]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
          >
            {para}
          </motion.h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeaderxPara;
