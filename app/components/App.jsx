import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import Popup from "./Popup";
import { useState } from "react";

const Webdata = [
  {
    img: "/image/portfolio-img1.jpg",
    title: "Project Title",
    description: "Brief description of the project",
  },
  {
    img: "/image/portfolio-img1.jpg",
    title: "Project Title",
    description: "Brief description of the project",
  },
  {
    img: "/image/portfolio-img1.jpg",
    title: "Project Title",
    description: "Brief description of the project",
  },
];
const App = () => {
    const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
   <div>
      {showPopup && <Popup />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Webdata.map((item, index) => (
          <div
            key={index}
            className="  rounded-lg bg-main-border p-2 shadow-md relative group/item   hover:transition-all hover:duration-600 "
          >
            <Image
              src={item.img}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div
              onClick={togglePopup}
              className="group/edit invisible group-hover/item:visible 
                      absolute m-auto top-0 left-0   bg-main/60  w-full  
                   h-full text-center pt-[65%]  "
            >
              <div className="absolute top-35 right-40 text-main hover:text-white text-2xl bg-white hover:bg-main rounded-full w-14 h-14 flex items-center justify-center">
                <FaRegEdit />
              </div>
              <h2 className="text-xl font-open font-semibold mb-2 text-white">
                {item.title}
              </h2>
              <p className=" text-white font-Roboto font-bold text-2xl ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
