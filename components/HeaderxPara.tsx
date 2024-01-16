import React from 'react'
import "../components/hxp.css"

const HeaderxPara = ({title, subtitle, para} : {title:string, subtitle:string, para:string}) => {
  return (
    <div className='flex justify-center z-[-22] '>
        <div className='w-[44vh] h-[44vh] bg-white rounded-full ml-[15rem] mt-[10rem] flex flex-col justify-center items-center'>
              <h3 className='text-[#0B523F] h-full w-full ml-[9.7rem] mt-[4rem] text-[3rem] '>
                {title}
              </h3>

            <h4 className='text-[#0B523F]  font-light'>
              {subtitle}
            </h4>

            <h5 className='text-[16px] flex flex-wrap mb-[7rem] text-center'>
              {para}
            </h5>

        </div>
    </div>

  )
}

export default HeaderxPara
