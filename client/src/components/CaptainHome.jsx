import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineSpeed } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { RiMapPin3Fill } from "react-icons/ri";
import { FaSquareFull } from "react-icons/fa";
import { RiWallet2Fill } from "react-icons/ri";

const CaptainHome = () => {
  const [RidePopup, setRidePopup] = useState(false);
  return (
    <div className="flex relative flex-col poppins items-center w-screen poppins h-screen overflow-x-hidden overflow-y-scroll">
      <div className="w-full relative h-[65%]">
        <img
          className="w-full absolute h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        <div className="absolute pt-4 px-5  w-screen flex justify-between items-center">
          <div className="text-4xl font-semibold select-none drop-shadow-lg">
            Rydito.
          </div>
          <Link 
          to="/captain/logout"
          className="px-4 py-4 bg-[#eee] cursor-pointer hover:bg-gray-300 shadow-sm  shadow-black rounded-full  flex justify-center items-center">
            <RiLogoutBoxRLine />
          </Link>
        </div>
      </div>

      <div className="w-screen h-[35%] rounded-t-2xl bg-gradient-to-b  from-blue-100 via-blue-50 to-white overflow-hidden flex justify-center items-center shadow-2xl shadow-black  ">
        <div className="w-full h-full bg-white rounded-t-2xl shadow-lg p-5">
          {/* Driver Info */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Driver"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800 text-xl">
                  Harsh Patel
                </h2>
                <p className="text-sm text-gray-500">Driver</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-800">₹295.20</p>
              <p className="text-xs text-gray-500">Earned</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#eee] mb-2">
                <MdOutlineSpeed className="text-3xl" />
              </div>
              <p className="text-lg font-semibold">10.2</p>
              <p className="text-xs text-gray-500">Hours Online</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#eee] mb-2">
                <FaCarAlt className="text-3xl" />
              </div>
              <p className="text-lg font-semibold">10.2</p>
              <p className="text-xs text-gray-500">Hours Online</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#eee] mb-2">
                <SlNotebook className="text-3xl" />
              </div>
              <p className="text-lg font-semibold">10.2</p>
              <p className="text-xs text-gray-500">Hours Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-screen bottom-0 bg-amber-600">
        <div
          className={` ${
            RidePopup ? "max-h-[100%] py-4" : "max-h-0 bottom-[-10%] "
          } transition-all duration-500 fixed shadow-lg bottom-0 shadow-black bg-white w-full select-none rounded-t-xl overflow-y-scroll scrollbar-hide`}
        >
          <h1 className="text-2xl select-none font-semibold text-gray-900 text-center">
            New Ride Available.
          </h1>

          <div className="w-full mt-3 flex flex-col items-center justify-center">
            <div className="w-full flex justify-between items-center bg-gradient-to-b  from-blue-100 via-blue-50 to-white px-4 text-center">
              <div className="flex items-center w-screen justify-between h-25 rounded-2xl mt-4 mb-5">
                <div className="flex justify-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Driver"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-xl">
                      Harsh Patel
                    </h2>
                    <p className="text-sm text-start text-gray-500">Driver</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-800">2.2 KM</p>
                  <p className="text-xs text-gray-500">Distance</p>
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
            <div className="w-full flex flex-col mt-3 items-center justify-center px-4 gap-2">
              <button
                onClick={() => {
                  setRidePopup(!RidePopup);
                }}
                className="w-full mx-auto mt-4 bg-green-700 text-white font-medium rounded-md cursor-pointer py-2 "
              >
                Accept Ride
              </button>
              <button
                onClick={() => {
                  setRidePopup(!RidePopup);
                }}
                className="w-full mx-auto bg-gray-300 text-black font-medium rounded-md cursor-pointer py-2"
              >
                Ignore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
