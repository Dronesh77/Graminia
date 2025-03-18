import React from "react";
import { Link } from "react-scroll";

const ChaloApp = () => {
  return (
    <div className="grid max-md:pb-[62rem] max-lg:pb-[62rem] h-[90vh]  grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 xl:mx-auto xl:max-w-7xl max-w-full">
      <div className="flex justify-center lg:pt-10 lg:items-center h-[95%]">
        <div className="border-slate-300 md:border-2  rounded-full lg:p-20 max-md:pt-10 ">
          <img
            src="https://chalo.com/assets/images/app-banner.png"
            alt=""
            className="xl:h-[60vh] "
          />
        </div>
      </div>

      <div className=" h-[95%] p-2 lg:pt-20 ">
        <div className="p-16 max-md:p-2">
          <h2 className="text-2xl pt-4 md:p-2 max-md:font-bold md:texl-4xl">
            Never Wait At The Bus Stop Ever Again
          </h2>
          <h1 className="font-extrabold text-4xl pt-4 md:p-2">Chalo App</h1>

          <p className="font-normal text-xl pt-4 md:p-2">
            Say hello to the world’s most advanced Passenger Information System
            (PIS) and mobile ticketing platform.
          </p>

          <p className="font-normal text-xl pt-4 md:p-2">
            Chalo is a free app that allows you to live track your bus and tells
            you at what time your bus will reach your stop. Now you never have
            to wait at a bus stop ever again.
          </p>

          <div className="lg:flex pt-3">
            <button className="items-center max-md:p-4 bg-black text-white font-semibold py-2 px-8 focus:outline-none hover:bg-gray-300 rounded-3xl hover:text-black mt-4 md:mt-0">
              Download App
            </button>
            <Link className="pt-4 ps-4 md:p-2 text-lg cursor-pointer underline">
              Try Chalo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaloApp;
