import React from "react";
import heroVideo from "../assets/pexels.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className=" object-cover h-full w-full absolute opacity-100 contrast-150 -z-10"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      <div className=" w-full h-[90%] flex justify-center flex-col items-center text-white px-4 text-center">
        <h1 className=" font-bold text-5xl p-2">CALL ME</h1>
        <h1 className=" font-bold text-5xl p-4">KOBIE.</h1>
        <p className=" text-2xl py-6">
          I am a Freelance Graphic Designer & Illustrator
        </p>
        <p className=" text-2xl">based in South Africa.</p>
      </div>
    </div>
  );
};

export default Hero;
