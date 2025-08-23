import React from 'react'
import { RiMapPin3Fill } from "react-icons/ri";
import { FaSquareFull } from "react-icons/fa";
import { RiWallet2Fill } from "react-icons/ri";

const LookingForDriver = ({driver}) => {
  return (
    <div
            className={` ${
              driver ? "max-h-[100%] py-4" : "max-h-0 bottom-[-10%] "
            } transition-all duration-500 fixed shadow-lg bottom-0 shadow-black bg-white w-full select-none rounded-t-xl overflow-y-scroll scrollbar-hide`}
          >
            <h1 className="text-2xl select-none font-semibold text-gray-900 text-center">
                Looking for Driver
            </h1>

            <div className="w-full mt-3 flex flex-col items-center justify-center">
              <div className="w-full flex justify-center items-center h-49 bg-gradient-to-b  from-blue-100 via-blue-50 to-white px-8 py-12 text-center">
                <img
                  src="https://mobile-content.uber.com/launch-experience/ride.png"
                  alt="Car"
                  className=" object-cover mx-auto filter drop-shadow-sm"
                />
              </div>
              <div className="flex items-start w-full border-b-2 border-b-[#eee] space-x-4 px-4 py-4">
                <RiMapPin3Fill
                  className="w-5 h-8 text-black mt-1 flex-shrink-0"
                  fill="black"
                />
                <div className="flex flex-col  ">
                  <div className="font-md text-black text-xl leading-tight">
                    562/11-A
                  </div>
                  <div className="text-gray-400 text-base font-normal">
                    Kaikondrahalli, Bengaluru, Karnataka
                  </div>
                </div>
              </div>
              <div className="flex items-start w-full px-4 space-x-4 py-4 border-b-2 border-b-[#eee]">
                <FaSquareFull
                  className="w-4 h-4 text-black mt-1 flex-shrink-0"
                  fill="black"
                />
                <div>
                  <div className="font-md text-black text-xl leading-tight mb-1">
                    Third Wave Coffee
                  </div>
                  <div className="text-gray-400 text-base font-normal leading-relaxed">
                    17th Cross Rd, PWD Quarters, 1st Sector,
                    <br />
                    HSR Layout, Bengaluru, Karnataka
                  </div>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between pt-4">
                <div className="flex items-center space-x-4">
                  <RiWallet2Fill className="w-6 h-6 text-black" />
                  <div>
                    <div className="font-md text-black text-xl">₹193.20</div>
                    <div className="text-gray-400 text-base font-normal">
                      Cash Cash
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
  )
}

export default LookingForDriver
