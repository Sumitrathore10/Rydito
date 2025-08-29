import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-screen h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3063475/3063475-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-between h-full w-full poppins text-white">
        {/* Logo */}
        

        {/* Transparent white box */}
        <div className="bg-white/30 backdrop-blur-md h-[22%] shadow-lg p-3 pt-5 pb-9 flex flex-col gap-4 w-full rounded-t-3xl">
          <p className="select-none font-semibold text-2xl text-white">
            Start Getting into Rydito
          </p>
          <Link
            to="/user/login"
            className="w-full select-none rounded-lg p-3 flex justify-center items-center bg-black text-white"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
