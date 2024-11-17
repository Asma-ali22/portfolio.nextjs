// import Image from "next/image";
//import Navbar from "./component/navbar";
// import { FaDownload } from "react-icons/fa6";
// import { FiMenu } from "react-icons/fi";
// import Hero from "./component/hero";
// import About from "./about/page";

// import Link from "next/link";
import Hero from "./component/hero";
//import About from "./about/page";
import Footer from "./component/footer";


  const Home=()=>{
    return(
        <div> 
            <Hero/>
            <Footer/>
            {/* //<About/> */}
        </div>
        

    )
  }
  export default Home 
//     const Navbar=()=>{
//     return(
//         <>
//     <div  className="bg-white fixed top-0 w-[100%] z-10">
//         {/* <div className="container mx-auto flex justify-between items-center"> */}
            

//             <div className="text-black hidden md:flex justify-evenly items-center">
//         <h1 className="text-4xl hover:text-blue-400 cursor-pointer px-28 font-semibold">aAsma Ali</h1>
//        <ul className= 'flex gap-8 px-3 px--2cursor-default scroll-px-14'>
//         <li className="hover:text-blue-400 text-1xl"><Link href="/ Home">Home</Link></li>
//         <li className="hover:text-blue-400 text-1xl"><Link href="/ about">About</Link></li>
//         <li className="hover:text-blue-400 text-1xl"><Link href="/ our products">potrfolio</Link></li>
//         <li className="hover:text-blue-400 text-1xl"><Link href="/ our products">Blog</Link></li>
//         <li className="hover:text-blue-400 text-1xl"><Link href="/ contact us">Contact us</Link></li>
              
//               </ul>
//               <a href="#" className=" hidden md:flex border border- bg-red-400 px-4 py-1 text-red-400 rounded[5px] items-center
//               gap-2 hover:text-black transition-duration-200">Download Cv
//               <FaDownload />
//               </a>
//               <div className="md:hidden text-[24px]">
                
//               <FiMenu />
                
            
//               </div>
// </div>

//     </div>
//     <Hero/>
//     <Link href="/about">About</Link>

  
//     </>
//   );
// }
// export default Navbar