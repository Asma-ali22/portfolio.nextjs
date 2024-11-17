
import React from "react";
// import Link from "next/link";

const ContactUs=()=>{
    return(
    
    <section className="container mx-auto py-10 px-4 bg-red-50">
    <div className="container mx-auto text-center">
        <h2 className="mt-16 text-3xl font-semibold text-center">Contact us</h2>
        <form className="max-w-md mx-auto mt-20">
            <div className=" mb-8 ">
                <input 
                type="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-500 rounded-md"
                required
                />
                </div>
                
                <div className=" mb-8">
                <input 
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-500 rounded-md"
                required
                />
                </div>

                <div className=" mb-8">
                <input 
                type="Number"
                placeholder="Mobile Number" 
                className="w-full p-3 border border-gray-500 rounded-md"
                required
                />
                </div>

                <div className=" mb-8">
                <input 
                type="adress"
                placeholder="your full Address" 
                className="w-full p-3 border border-gray-500 rounded-md"
                required
                />
                </div>

                <div className=" mb-8">
                <input 
                type="Feedback"
                placeholder="give me Feedback" 
                className="w-full p-3 border border-gray-500 rounded-md"
                required
                />
                </div>

                <div className="mb-8">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-300">submit</button>

                </div>



                
                


            

        </form>
    </div>
    </section>
    )
}
export default ContactUs