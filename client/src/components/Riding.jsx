import React from "react";
import { Link } from "react-router-dom";
import { RiMapPin3Fill } from "react-icons/ri";
import { RiWallet2Fill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";

const Riding = () => {
  return (
    <div className="flex flex-col items-center w-screen poppins h-screen overflow-y-scroll">
      <div className="w-full relative h-[50%]">
        <img
          className="w-full absolute h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        <Link
          to="/user/home"
          className="absolute px-4 py-4 bg-[#eee] cursor-pointer hover:bg-gray-300 shadow-sm  shadow-black rounded-full bottom-[2%] right-3 flex justify-center items-center"
        >
          <IoHomeSharp />
        </Link>
      </div>

      <div className="w-screen h-[50%] rounded-t-2xl bg-gradient-to-b  from-blue-100 via-blue-50 to-white pb-6 pt-2 overflow-hidden flex justify-center items-center shadow-2xl shadow-black  ">
        <div className="flex flex-col w-full h-full  items-center justify-center py-4">
          <div className="w-full flex justify-center items-center  px-4 py-12 text-center">
            <div className=" w-full">
              <div className="flex w-full h-5 py-4 items-center justify-between mb-4">
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
          <div className="w-full flex flex-col mb-5 mt-3 items-center justify-center px-4">
            <button className="w-full mt-4 bg-green-700 text-white font-medium rounded-md cursor-pointer py-2">
              Make a payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
