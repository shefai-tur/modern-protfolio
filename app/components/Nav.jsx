"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";



const navdata=[
  {key:"/", label:"Home",link:"/", icon: <IoHomeOutline className=" text-xl md:text-2xl  text-white" />},
  {key:"/about", label:"About",link:"/about", icon: <FaUser className=" text-xl md:text-2xl  text-white" />},
  {key:"/resume", label:"Resume",link:"/resume", icon: <CgNotes className="text-xl md:text-2xl  text-white" />},
  {key:"/protfolio", label:"Protfolio",link:"/protfolio", icon: <CiFolderOn className="text-xl md:text-2xl  text-white" />},
  {key:"/contact", label:"Contact",link:"/contact", icon: <CgMail className="text-xl md:text-2xl  text-white" />},
 
]

const Nav = () => {
   const pathname = usePathname();
  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 ">
      {navdata.map((navdata)=>(
        
       <Link href={navdata.link} key={navdata.key}>
      
        <div className={`relative   ${pathname===navdata.key ? "md:w-44" :"md:hover:w-44"} w-10 h-10    md:w-15 md:h-15 md:bg-white  rounded-full flex justify-center items-center duration-[1s,3s]`}>
          <h1 className="font-display hidden md:block text-base text-primary font-open font-semibold">
            {navdata.label}
          </h1>
            
          <div className="bg-main p-2 md:p-4 rounded-full border-2 left-0 absolute   border-white ">
        {navdata.icon}
          </div>
      </div>
      </Link>
    
      ))}
    
     
    </div>
  );
};

export default Nav;
