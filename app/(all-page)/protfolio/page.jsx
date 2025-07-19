"use client";
import { useState } from "react";
import Web from "@/app/components/Web";
import App from "@/app/components/App";
import SidbarP from "@/app/components/SidbarP";
import All from "@/app/components/All";
import UiUx from "@/app/components/UiUx";
import Nav from "@/app/components/Nav";
const protfolio = () => {
    const [activeSection, setActiveSection] = useState("all");
  return (
    <div className="container mx-auto w-full   min-h-100vh bg-white rounded-xl  text-black px-5 md:px-12 md:py-25 py-10 relative">
        <nav className="absolute top-[-15] md:top-[-30] right-0 w-full z-50">
                 <Nav/>
                </nav>
      {/* =====================Protfolio===================== */}
      <h1 className="md:text-4xl text-3xl mb-10 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
        Portfolio
      </h1>
      <div>
        <SidbarP 
        activeSection={activeSection}
         onSectionChange={setActiveSection}
        />
      </div>
      <div>
         {activeSection === "all" && < All/>}
          {activeSection === "web" && <Web />}
          {activeSection === "app" &&  <App />}
         {activeSection === "ui" && <UiUx />}
      </div>
      <div className=" mx-auto w-full flex justify-center mt-10">
        <button className="hover:bg-main hover:text-white px-6 py-2 rounded-sm font-open font-semibold border border-main transition duration-300 ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default protfolio;
