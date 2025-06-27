import React, { useState } from "react";
import All from "./All";
import { IoIosCloseCircle } from "react-icons/io";
import DetailsP from "./DetailsP";
const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible ? (
        ""
      ) : (
        <div className="popup">
          <button className="text-4xl shadow-amber-50 text-secondary hover:text-main" onClick={togglePopup}>
            <IoIosCloseCircle />
          </button>
          <div><DetailsP/></div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Popup;
