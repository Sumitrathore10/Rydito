import React from "react";
import { useRef, ref } from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = ({ panel, panelRef , setPanel , setVehicalPanel , vehicalpanel}) => {
  const location = [
    "123, MG Road, Bangalore, India",
    "456, Brigade Road, Bangalore, India",
    "789, Indiranagar, Bangalore, India",
  ];
  return (
    <div
      ref={panelRef}
      onClick={() =>{
        setVehicalPanel(!vehicalpanel);
        setPanel(false);
        
      }}
      className={`${
        panel ? "h-[70%]" : "h-0"
      } w-full transition-all bg-white duration-500 px-3`}
    >
      {location.map((loc, inx) => {
        return (
          <div
            key={inx}
            className="flex w-full py-2 active:border select-none bg-gray-100 items-center gap-3 mb-4  rounded-lg px-4 "
        >
            <div className="p-3 flex justify-center items-center rounded-full bg-[#eee]">
              <FaLocationDot className=" text-xl" />
            </div>
            <p className="text-gray-800 text-base">{loc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
