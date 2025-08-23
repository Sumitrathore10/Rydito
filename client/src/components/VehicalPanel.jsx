import React from "react";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const VehicalPanel = ({ vehical, setVehicalPanel, vehicalpanel ,setRideConfirmation}) => {
  return (
    <div
      className={` ${
        vehicalpanel ? "max-h-[68%] py-4" : "max-h-0 bottom-[-10%] "
      } transition-all duration-500 fixed shadow-lg bottom-0 shadow-black bg-white w-full pb-8 select-none px-3 rounded-t-xl`}
    >
      <div className="w-11 h-1 m-auto mb-4 rounded-full select-none bg-[#eee]"></div>
      <h1 className="text-2xl select-none font-semibold text-gray-800 mb-4 flex items-center justify-between">
        Choose a Ride
        <FaChevronDown
          onClick={() => setVehicalPanel(false)}
          className={`${
            vehicalpanel ? "block" : "hidden"
          } text-xl mr-5 cursor-pointer transition-all`}
        />
      </h1>
      {vehical.map((item, index) => (
        <div
        onClick={()=>{
          setVehicalPanel(false)
          setRideConfirmation(true)
        }}
          key={index}
          className="flex items-center p-4 gap-3 sm:gap-7 mb-2 rounded-xl bg-white active:border"
        >
          {/* Left Image Section */}
          <div className="flex-shrink-0">
            <img
              src={item.image}
              className="w-25 h-20 sm:w-25 sm:h-25 object-contain"
              alt={item.name}
            />
          </div>

          {/* Ride Info Section */}
          <div className="flex flex-col gap-1 flex-1">
            {/* Row: Title + Seats + Price */}
            <div className="flex items-center">
              <h1 className="text-base sm:text-xl flex gap-2 sm:gap-3 font-medium">
                {item.name}
                <span className="flex items-center text-xs sm:text-base font-normal gap-1">
                  <FaUser /> {item.seats} Seats
                </span>
              </h1>
              <div className="ml-auto text-base sm:text-xl font-semibold whitespace-nowrap">
                ₹ {item.price}
              </div>
            </div>

            {/* Ride Details */}
            <div className="text-xs text-black">{item.time}</div>
            <p className="text-xs text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicalPanel;
