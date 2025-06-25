import React from "react";

import Lottie from "lottie-react";

import ani from "../../../public/Animation - 1750866641760.json"
function Newsletter() {

  // add logo news letter
  return (
    <div className="p-10 flex justify-center items-center mb-10 bg-white w-full  ">



      <div className="bg-[rgba(255, 255, 255, 1)] flex md:flex-row flex-col  shadow-xl w-full md:h-[400px] justify-center items-center p-7 border-black/10 rounded border ">

         <div className="lg:w-full  w-1/2">
          <Lottie  className="h-[330px]" animationData={ani} loop={true}/>
        </div>

        <section className="flex  w-full items-center justify-center flex-col rounded  gap-y-8 ">
          
        <div>
          <h1 className="text-black md:text-4xl text-2xl font-semibold">
            Stay Conncted With Us
          </h1>
        </div>

        <input
          className="py-2.5 px-12 border border-black/20 outline-none text-black  rounded"
          placeholder="Enter your email"
        />
        <div className="flex ">
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 px-10 py-2.5 rounded">
            {" "}
            Subcribe
          </button>
        </div>
      </section>
      </div>



    </div>
  );
}

export default Newsletter;
