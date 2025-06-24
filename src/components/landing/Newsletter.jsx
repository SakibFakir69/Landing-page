import React from "react";

function Newsletter() {
  return (
    <div className="p-10 flex justify-center items-center mb-10 bg-white w-full  ">
      <section className="border w-full flex justify-center items-center flex-col bg-[rgba(255, 255, 255, 1)] shadow-xl h-[300px] rounded  gap-y-8">
        <div>
          <h1 className="text-black text-4xl font-semibold">
            Stay Conncted With Us
          </h1>
        </div>

        <input
          className="py-2.5 px-12 border border-black/20 outline-none text-black md:w-1/2 rounded"
          placeholder="Enter your email"
        />
        <div className="flex ">
          <button className="bg-blue-500  hover:bg-blue-600 px-10 py-2.5 rounded">
            {" "}
            Subcribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
