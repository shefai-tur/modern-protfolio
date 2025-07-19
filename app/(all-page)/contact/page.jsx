import Nav from "@/app/components/Nav";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contact = () => {
  return (
    <div className="container mx-auto w-full   min-h-100vh bg-white rounded-xl  text-black md:px-12 px-5 md:py-25 py-10 relative">
        <nav className=" absolute top-[-15] md:top-[-30] right-0 w-full z-50">
                 <Nav/>
                </nav>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="flex items-center gap-4">
          <p className=" bg-main-border w-16 h-16 rounded-sm flex items-center justify-center">
            <FaLocationDot className="text-2xl text-main " />
          </p>
          <div>
            <h2 className="font-bold font-Roboto mb-1 text-xl">Address</h2>
            <p className="text-secondary font-medium font-open text-base ">
              Cosmopliton,2no Road,Chottogram
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 my-2.5 md:my-0">
          <p className=" bg-main-border w-16 h-16 rounded-sm flex items-center justify-center">
            <FaPhone className="text-2xl text-main " />
          </p>
          <div>
            <h2 className="font-bold font-Roboto mb-1 text-xl">Phone</h2>
            <p className="text-secondary font-medium font-open text-base ">
              +8801851694920
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className=" bg-main-border w-16 h-16 rounded-sm flex items-center justify-center">
            <MdEmail className="text-2xl text-main " />
          </p>
          <div>
            <h2 className="font-bold font-Roboto mb-1 text-xl">Email</h2>
            <p className="text-secondary font-medium font-open text-base ">
              shefaitur@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-12 mt-5 md:mb-6 mb-3">
        <h1 className="md:text-4xl text-3xl font-Roboto font-semibold text-center">
          Send me a message
        </h1>
      <div className="w-[80%] mx-auto mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  ">
          <input
            type="text"
            placeholder="Your Name"
            className=" border border-main-border pr-2.5 pl-5 py-4 rounded-sm  outline-main"
          />
          <input
            type="email"
            placeholder="Your Email"
            className=" border border-main-border pr-2.5 pl-5 py-4   rounded-sm  outline-main"
          />
          <input
            type="number"
            placeholder="Your Phone"
            className=" border border-main-border pr-2.5 pl-5 py-4   rounded-sm  outline-main"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className=" border border-main-border pr-2.5 pl-5 py-4   rounded-sm  outline-main"
          />
        </div>
        <textarea
          type="text"
          placeholder="Write your message heare"
          className=" border border-main-border pr-2.5 pl-5 py-4   rounded-sm  outline-main w-full h-54 mt-6"
        />
        <button className="font-Roboto text-white font-semibold  bg-main hover:text-main hover:bg-white hover:border hover:border-main py-3 w-full text-center rounded-lg mt-6"> Send Message</button>
      </div>
      </div>
    </div>
  );
};

export default contact;
