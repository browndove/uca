"use client"
import { MenuIcon, X } from 'lucide-react';
import React, { useState } from "react";
import Naviigation from '@/components/Naviigation';
const Header = () => {

    const stopPropagation = (event) => {
        event.stopPropagation();
      };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className='px-10 py-7 bg-[#FFFFFF]'>
                <div className='flex items-center justify-between'>

                    <div className='flex items-center'>

                        <div className='ml-6 flex items-baseline'>
                            <h1 className='text-[#59c953] text-[5.5rem] font-bold'>U</h1>
                            <span className='text-[#19604C] font-bold'>nique</span>
                        </div>

                        <div className='ml-6 flex items-baseline'>
                            <h1 className='text-[#59c953] text-[5.5rem] font-bold'>C</h1>
                            <span className='text-[#19604C] font-bold'>hild</span>
                        </div>

                        <div className='ml-6 flex items-baseline'>
                            <h1 className='text-[#59c953] text-[5.5rem] font-bold'>A</h1>
                            <span className='text-[#19604C] font-bold'>cademy</span>
                        </div>

                    </div>

                    <div
                        className={`fixed top-0 right-0 w-1/2 h-full bg-[#FEFFF9] transition-transform  duration-300 ease-in transform ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                         stopPropagation={stopPropagation}
                    >
                        <div class="flex items-center mt-5 p-5 "stopPropagation={stopPropagation}>
  <input type="text" class="border border-solid border-green-200 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 w-[30rem]" placeholder="Search..."/>

</div>
                        <Naviigation onClick={stopPropagation}/>
                    </div>

                    <div className="p-5 bg-[#D5F523] rounded-[2.5rem] fixed right-4" onClick={toggleMenu}>
                        {isOpen ? <X size={30} fill="black" className="text-black" /> : <MenuIcon size={30} fill="black" className="text-black" />}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Header;
