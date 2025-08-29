import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import LocationSearchPanel from "./LocationSearchPanel.jsx";
import VehicalPanel from "./VehicalPanel.jsx";
import RideConfirm from "./RideConfirm.jsx";
import LookingForDriver from "./LookingForDriver.jsx";
import WaitingDriver from "./WaitingDriver.jsx";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const [vehicalpanel, setVehicalPanel] = useState(false);
  const [rideConfirmation, setRideConfirmation] = useState(false);
  const [driver, setDriver] = useState(false);

  const panelRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const vehical = [
    {
      name: "Rydito Go",
      seats: 4,
      price: 99.7,
      image: "https://mobile-content.uber.com/launch-experience/ride.png",
      description: "Affordable Compact Rides",
      time: "1 min away",
    },
    {
      name: "Moto",
      seats: 2,
      price: 40.5,
      image:
        "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png",
      description: "Affordable Moto Rides",
      time: "2 min away",
    },
    {
      name: "Auto",
      seats: 3,
      price: 80.5,
      image:
        "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png",
      description: "Affordable Auto Rides",
      time: "2 min away",
    },
  ];

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
        <div className="w-screen h-[100%] z-20 absolute flex  flex-col  justify-end overflow-hidden bottom-0">
          <div className="w-full h-[30%] bg-white  flex rounded-t-xl flex-col justify-center p-4 ">
            <div className="m-auto w-12 rounded-full mt-2 bg-[#eee] py-[0.7%] px-5 text-white"></div>

            <div className="flex items-center justify-between mt-2  mb-2">
              <h2 className="text-2xl select-none font-semibold  text-gray-800">
                Find a trip
              </h2>
              <FaChevronDown
                onClick={() => setPanel(false)}
                className={`${
                  panel ? "block" : "hidden"
                } text-xl mr-3 transition-all`}
              />
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="w-screen h-full relative p-4 rounded-t-xl space-y-4"
            >
              <div className="absolute top-8 lg:top-8 left-[-1%] md:top-3 xl:left-0 xl:top-8 flex flex-col items-center justify-between gap-1">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                </div>
                <div className="line  h-10 w-1 bg-gray-800 rounded-full "></div>
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-gray-900"></div>
                </div>
              </div>
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

          <LocationSearchPanel
            panel={panel}
            setPanel={setPanel}
            panelRef={panelRef}
            vehicalpanel={vehicalpanel}
            setVehicalPanel={setVehicalPanel}
          />
          <VehicalPanel
            vehical={vehical}
            vehicalpanel={vehicalpanel}
            setVehicalPanel={setVehicalPanel}
            setRideConfirmation={setRideConfirmation}
          />
           <RideConfirm rideConfirmation={rideConfirmation} setDriver={setDriver} setRideConfirmation={setRideConfirmation}/>
           <LookingForDriver driver={driver} />
           {/* <WaitingDriver driver={driver} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
