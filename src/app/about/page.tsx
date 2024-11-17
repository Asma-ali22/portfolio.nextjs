"use client"
import React from "react";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const About=()=>{
    return(
        <div className="flex w-full flex-col items-center justify-center text-red-800 bg-red-50" >
            <h4 className="text-5xl mt-20 font-semibold">
             <TypeAnimation
            sequence={[
                "As a Frontend Developer",
                500,
                "As a Graphic Designer",
                500,
            ]}
            repeat={3}
            />
            </h4>

            <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-4 md:gap-16 mt-10 md:mt-20">
                <div className="col-span-1  md:col-span-3 flex flex-col items-start justify-start ">
                    <h2 className="mb-6 text-lg md:text-2xl font-bold uppercase text-gray-700 text-center px-32 position-fixed"> Biography</h2>

                    <p className="font-medium px-4 md:px-14 mt-1 md:mt-4 ">
                    Welcome! I&aposm Asma Ali, and I know I can help your company create stunning visuals.
                     As someone who has worked in marketing and graphic design for over a decade, I know what brands need to capture their audiences&apos attention. With my powerful design skills and knack for marketing,
                     I have the right background for your brand&apos needs.

                    </p>
                    <p className="font-medium px-4 md:px-14 mt-1 md:mt-4">
                    While frontend and graphic design are my two passions, I also enjoy surfing, doing crosswords and exploring the world. I am insanely curious about different cultures, 
                    so you&aposll also find my nose buried in a book or travel blog.
                    </p>


                    <p className="font-medium px-4 md:px-14 mt-1 md:mt-4">
                    When you&apos re ready for your brand to reach its next level of success, call or email me. I have the right tools and expertise to turn your brand into a household name.
                      See it for yourself in my &aposwork&apos section.
                    </p>
                </div>

                <div className="col-span-3 md:col-span-2 sm:col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 sm:p-6 md:p-8">

                
                <div className="absolute top-0 -right-3 sm:right-5 md:right-10 -z-10 w-[102%] rounded-2xl bg-dark"/>
          <Image src="/bb4.jpg" width={1500}  height={1200} alt="picture" className='w-full h-auto rounded-2xl hover:translate-y-1 cursor-pointer'/>
                </div>


                <div className="col-span-2 flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <span className="inline-block text-4xl font-bold items-center">
                            50+</span>
                            <h2 className="text-2xl font-medium capitalize text-gray-900 ">Satisfied Client</h2>
                    </div>

                    <div className="flex flex-col  justify-center items-center">
                        <span className="inline-block text-4xl font-bold">
                            10+</span>
                            <h2 className="text-xl  font-medium capitalize text-gray-900 items-center">Project Completed</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <span className="inline-block text-4xl font-bold">
                            2+</span>
                            <h2 className="text-xl font-medium capitalize text-gray-900 items-center">Years of experience</h2>
                    </div>

                </div>
         </div>
            
        
    </div>
    )
}
export default About