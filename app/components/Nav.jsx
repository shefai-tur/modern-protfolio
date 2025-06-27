import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { CgMail } from "react-icons/cg";

const Nav = () => {
  return (
    <div className="flex justify-center items-center gap-5 ">
      <Link href="/">
        <div className=" relative    hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center duration-[1s,3s] ">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            Home
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <IoHomeOutline className=" text-2xl  text-white" />
          </div>
        </div>
      </Link>
      <Link href="/about">
       <div className=" relative   hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center  duration-[1s,3s]">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            About
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <FaUser className=" text-2xl  text-white" />
          </div>
        </div>
      </Link>
      <Link href="/resume">
        <div className=" relative   hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center  duration-[1s,3s]">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            Resume
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <CgNotes className=" text-2xl  text-white" />
          </div>
        </div>
      </Link>
      <Link href="/protfolio">
      <div className=" relative   hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center duration-[1s,3s] ">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            Portfolio
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <CiFolderOn className=" text-2xl  text-white" />
          </div>
        </div>
      </Link>
      {/* <Link href="/blog">
       <div className=" relative   hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center  duration-[1s,3s]">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            Blog
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <PiNotePencilLight className=" text-2xl  text-white" />
          </div>
        </div>
      
      </Link> */}
      <Link href="/contact">
        <div className=" relative   hover:w-44 w-15 h-15 bg-white  rounded-full flex justify-center items-center duration-[1s,3s] ">
          <h1 className="font-display  text-base text-primary font-open font-semibold">
            Contact
          </h1>
          <div className="bg-main p-4 rounded-full border-2  left-0 absolute ">
            <CgMail className=" text-2xl  text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
