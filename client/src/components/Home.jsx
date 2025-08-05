import React, {  useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import LocationSearchPanel from "./LocationSearchPanel.jsx";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  return (
    <div className="relative w-screen poppins h-screen ">
      <h1 className="text-4xl poppins absolute left-5 top-5 font-bold select-none drop-shadow-lg">
        Rydito.
      </h1>
      <div className="w-screen h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
        <div className="w-screen h-[100%] absolute flex  flex-col  justify-end overflow-hidden bottom-0">
          <div className="w-full h-[30%] bg-white relative flex rounded-t-xl flex-col justify-center p-4 ">
            <div className="flex items-center justify-between mt-2  mb-2">
              <h2 className="text-2xl select-none font-semibold  text-gray-800">
              Find a trip
            </h2>
            <FaChevronDown onClick={()=>setPanel(false)} className={`${panel ? "block" : "hidden"} text-xl mr-3 transition-all`}/>
            </div>
            
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="w-screen h-full  p-4 rounded-t-xl space-y-4"
            >
              <div className="line absolute h-18 w-1 top-[40%] left-[5%] bg-gray-800 rounded-full "></div>
              <input
                onClick={() => {
                  setPanel(true);
                }}
                type="text"
                name="pickup"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Add a pick-up location"
                className="w-[90%] px-6 py-2 border rounded-lg bg-[#eee] border-none focus:outline-none "
                required
              />

              <input
                value={destination}
                onClick={() => setPanel(true)}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                name="destination"
                placeholder="Enter your destination"
                className="w-[90%] px-6 py-2 border rounded-lg bg-[#eee] border-none focus:outline-none "
                required
              />
            </form>
          </div>
          <LocationSearchPanel panel={panel} panelRef={panelRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
