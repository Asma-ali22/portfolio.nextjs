"use client"

import React, { useState } from "react";
import Link from "next/link";
// import { FaDownload } from "react-icons/fa6";
// import { FiMenu } from "react-icons/fi";




const Navbar=()=>{

    const [isClick, setisClick ]=useState(false);

    const toggleNavbar=():void=>{
        setisClick(!isClick)
    }
    return(

        <>
    
     <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto sm:px-6 flex justify-evenly px-4  lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-white text-2xl">Portfolio</Link>

                </div>

            </div>
       <div className="hidden md:block mt-2">
        <div className="ml-4 flex items-center space-x-4 mt-2 text-white">
             <ul   className='flex gap-8 px-3 px--2cursor-default scroll-px-14'>
            <li className="hover:text-red-400 text-2xl"><Link href="/">Home</Link></li>
            <li className="hover:text-red-400 text-2xl"><Link href="/about">About</Link></li>
            <li className="hover:text-red-400 text-2xl"><Link href="/skills">Skills</Link></li>
            
            <li className="hover:text-red-400 text-2xl"><Link href="/contact">ContactUs</Link></li>
            </ul>

            
    </div>

        </div>
        <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black
             hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>  
              {isClick ? (
                <svg
                className="h-6 w-6"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18l18 6M6 6l12 12"/>
                </svg>
              ) :(
                <svg
                className="h-6 w-6"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7  6h7"/>
                </svg>

              )}
            </button>

        </div>

       
        </div>
  {isClick &&(
    <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">



        <li className="hover:text-red-400 block text-2xl"><Link href="/">Home</Link></li>
            <li className="hover:text-red-400 block text-2xl"><Link href="/about">About</Link></li>
            <li className="hover:text-red-400  block text-2xl"><Link href="/skills">Skills</Link></li>
            
            <li className="hover:text-red-400  block text-2xl"><Link href="/contact">ContactUs</Link></li>
        </div>

    </div>
  )}
     </nav>
    </>
    )
}
export default Navbar