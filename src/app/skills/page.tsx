import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4 mt-6 bg-red-50">
      <h2 className="text-center mt-6 font-bold text-5xl ">What I do</h2>
      <div className="grid grid-cols-1 , md:grid-cols-3 gap-6 items-center">

        <div className="mt-16 hover:translate-x-1 shadow-lg flex flex-col gap-14 px-8 py-10  bg-red-500 text-white">

          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className=" text-[30px] font-normal"> Creative Design</h2>

          <p className="text-[20px] hover:translate-y-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aperiam accusantium obcaecati odio nostrum repudiandae non
            tenetur voluptates alias sequi! Quasi dolor, atque dignissimos quidem odit sit delectus quae voluptatem laudantium.</p>
        </div>

        <div className="mt-16 shadow-lg flex flex-col gap-14 px-8 py-10 bg-red-500 text-white">

          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className=" text-[30px] font-normal"> Creative Design</h2>


          <p className="text-[20px] hover:translate-y-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aperiam accusantium obcaecati odio nostrum repudiandae non
            tenetur voluptates alias sequi! Quasi dolor, atque dignissimos quidem odit sit delectus quae voluptatem laudantium.</p>
        </div>


        <div className="mt-16 shadow-lg flex flex-col gap-14 px-8 py-10 bg-red-500 text-white">

          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className=" text-[30px] font-normal"> Creative Design</h2>

          <p className="text-[20px] hover:translate-y-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aperiam accusantium obcaecati odio nostrum repudiandae non
            tenetur voluptates alias sequi! Quasi dolor, atque dignissimos quidem odit sit delectus quae voluptatem laudantium.</p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 mt-7 ">
        <h2 className="text-center mt-6 font-bold text-5xl text-red-800 ">Skills</h2>

        <p className="mt-10 text-xl text-gray-950">A frontend developer is responsible for coding and implementing all visible and interactive elements on the website or mobile application that users have direct contact with. A frontend developer cooperates with UX/UI
          designers, backend developers, and other teammates to ensure that the interface is attractive, intuitive, and works smoothly</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mt-6 text-xl font-semibold" >HTML</p>
            <div className="relative bg-gray-400 h-[4px] mt-1">
              <div className="bg-red-800 absolute h-[4px] w-[100%]"></div>

            </div>

            <div>
              <p className="mt-6 text-xl font-semibold" >CSS</p>
              <div className="relative bg-gray-400 h-[4px] mt-1">
                <div className="bg-red-800 absolute h-[4px] w-[90%]"></div>

              </div>

              <div>
                <p className="mt-6 text-xl font-semibold" >Javascript</p>
                <div className="relative bg-gray-400 h-[4px] mt-1">
                  <div className="bg-red-800 absolute h-[4px] w-[70%]"></div>

                </div>

                <div>
                  <p className="mt-6 text-xl font-semibold" >Typescript</p>
                  <div className="relative bg-gray-400 h-[4px] mt-1">
                    <div className="bg-red-800 absolute h-[4px] w-[80%]"></div>

                  </div>
                  <div>
                    <p className="mt-6 text-xl font-semibold" >Next.Js</p>
                    <div className="relative bg-gray-400 h-[4px] mt-1">
                      <div className="bg-red-800 absolute h-[4px] w-[70%]"></div>

                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto py-10 px-4">
        <h2 className="text-5xl font-bold text-center text-red-800 mt-10 ">Projects</h2>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="row-span-2 relative group mt-10">

            <Image src="b11.jpg" height={200} alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
      top-0 opacity-0 transition duration-500 group-hover:opacity-100
      grid place-content-center text-white ">
              Weather Api

            </div>

          </div>


          <div className="row-span-2 relative group mt-10">

            <Image src="/b12.jpg" alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
top-0 opacity-0 transition duration-500 group-hover:opacity-100
grid place-content-center text-white ">
              Fb Signup form

            </div>

          </div>


          <div className="row-span-2 relative group mt-10">

            <Image src="/b8.webp" alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
top-0 opacity-0 transition duration-500 group-hover:opacity-100
grid place-content-center text-white ">
              Calculator

            </div>

          </div>


          <div className="row-span-2 relative group mt-10">

            <Image src="/b13.png" alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
top-0 opacity-0 transition duration-500 group-hover:opacity-100
grid place-content-center text-white ">
              Todo List

            </div>

          </div>


          <div className="row-span-2 relative group mt-10">

            <Image src="/b5.jpg" alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
top-0 opacity-0 transition duration-500 group-hover:opacity-100
grid place-content-center text-white ">
              image slider

            </div>
            </div>
            <div className="row-span-2 relative group mt-10">

            <Image src="/b15.webp" alt="/" />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
top-0 opacity-0 transition duration-500 group-hover:opacity-100
grid place-content-center text-white ">
              CountDown timer

            </div>

          </div>

        </div>
        </div>
      

    </section>


  )
}
export default Skills