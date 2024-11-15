 "use client"
 import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Hero=()=>{
    return(
        
   <div className='bg-[url("/bb4.jpg")] mt-2 w-screen h-screen bg-cover bg-center  bg-fixed flex items-center  '>
    <br/>
    <br/>
     <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-gray-950 flex flex-col gap-[40px]">
            <div>

                <h1 className="text-5xl"> I'm Asma ALI</h1>
                <h4 className="text-3xl mt-4 font-medium">
                    

                    <TypeAnimation
                    sequence={[
                        "I'm a Frontend Developer",
                        500,
                        "I'm a Graphic Designer",
                    ]}
                    repeat={1}
                    />
                </h4>
            </div>
            <div className="bg-[#ff4D41] h-[2px] w-[40px]"></div>
            <div>
                <p className="text-2xl">In a professional content it ofte happens that private clients coder publication to be made</p>
            </div>
            <div>
            <button className="mt-5 px-5 py-2.5  rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-red-400">Learn More</button>
   </div>
        </div>
        <div className="flex gap-6 pb-5 mt-8 text-gray-800"> 
        <FaFacebook   className="text-4xl cursor-pointer hover:text-red-600" />
        <FaInstagram className="text-4xl cursor-pointer hover:text-red-600" />
        <FaLinkedin  className="text-4xl cursor-pointer hover:text-red-600" />
         <FaTwitter   className="text-4xl cursor-pointer hover:text-red-600" />


        </div>
     </div>
     

   </div>
   
    )
}
export default Hero