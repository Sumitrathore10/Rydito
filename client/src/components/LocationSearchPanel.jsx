import React from "react";
import { useRef ,ref} from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = ({panel , panelRef }) => {
  return (
    <div
      ref={panelRef}
      className={`${
        panel ? "h-[70%]" : "h-0"
      } w-full transition-all bg-white duration-500 px-3`}
    >
         <div className="flex items-center gap-3 mb-4  rounded-lg px-4 w-full max-w-md ">
<div className="p-3 flex justify-center items-center rounded-full bg-[#eee]">      <FaLocationDot className=" text-xl" /></div>
      <p className="text-gray-800 text-base">
        123, MG Road, Bangalore, India
      </p>
    </div>
    </div>
  );
};

export default LocationSearchPanel;
