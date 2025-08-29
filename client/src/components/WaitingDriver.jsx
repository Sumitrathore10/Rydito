import React from "react";
import { RiMapPin3Fill } from "react-icons/ri";
import { FaSquareFull } from "react-icons/fa";
import { RiWallet2Fill } from "react-icons/ri";

const WaitingDriver = ({ driver }) => {
  return (
    <>
      <div
        className={`h-fit py-4 transition-all duration-500 fixed shadow-lg bg-white bottom-0 shadow-black w-full select-none rounded-t-xl overflow-x`}
      >
        <div className="bg-white flex items-center justify-center">
          <span className="text-black text-2xl font-semibold">
            Meet at the pickup point
          </span>
        </div>
        <div className="w-full mt-3 flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center h-49 bg-gradient-to-b  from-blue-100 via-blue-50 to-white px-4 py-12 text-center">
            <div className=" w-full">
              <div className="flex w-full items-center justify-between mb-4">
                <div className="flex items-center relative ml-3">
                  {/* Driver Photo */}
                  <div className="w-16 h-16 z-20 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="Driver"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Car Image */}
                  <div className="w-16 h-16 absolute left-9 bg-blue-100 rounded-full flex items-center justify-center">
                    <img
                      src="https://mobile-content.uber.com/launch-experience/ride.png"
                      alt="Suzuki Car"
                      className="w-20 object-cover"
                    />
                  </div>
                </div>

                {/* Driver Details */}
                <div className="text-right">
                  <div className="text-gray-600 text-sm font-medium">Sumit</div>
                  <div className="text-black text-xl font-medium">
                    HR26T0001
                  </div>
                  <div className="text-gray-600 text-sm">Mercedes GWAGAN</div>
                  <div className="flex items-center justify-end mt-1">
                    <span className="text-gray-500 mr-1">★</span>
                    <span className="text-black font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default WaitingDriver;
