import React from "react";

function Pricing() {
  return (
    <div className="bg-white p-10">
      <div className="py-8">
        <h1 className="font-semibold text-4xl text-center text-black">
          Choose your best pricing plan
        </h1>
        <p className="text-black flex  gap-x-2 flex-row items-center font-semibold text-center justify-center">
          Added for Monthly{" "}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/toggle-off.png"
            alt="toggle-off"
          />{" "}
          Yearly
        </p>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-4 p-4 md:w-full w-10/12 items-center justify-center mx-auto">
        {/* start-up */}

        <div className=" bg-[rgba(255, 255, 255, 1)] shadow-xl px-4  h-[420px] min-w-44">
          <div className=" flex justify-center items-center flex-col ">
            <div className="flex flex-col  gap-y-3 mt-6">
              <h2 className="text-xl text-black font-semibold">Start-up</h2>
              <p
                className="w-40
           border-2 border-black font-bold"
              ></p>

              <h1 className="text-black text-3xl font-semibold">$10/mo</h1>
            </div>

            <div className="text-stone-600 font-medium flex flex-col gap-y-2 mt-6">
              <p>Easy Customizable</p>
              <p>Commercia license</p>
              <p>Singal user license</p>
              <p>Hotline support 24/7</p>
            </div>

            <div>
              <button className="bg-blue-200 text-blue-500 font-semibold py-2.5 p-2 px-8 mt-8">
                TRY THIS PACKAGE{" "}
              </button>
            </div>
          </div>
        </div>

        {/* cassic */}

        <div className="h-[480px]  bg-[rgba(255, 255, 255, 1)] shadow-xl px-4 ">
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col  gap-y-3 mt-6">
              <h2 className="text-xl text-black font-semibold">Classic</h2>
              <p
                className="w-40
           border-2 border-black font-bold"
              ></p>

              <h1 className="text-black text-3xl font-semibold">$30/mo</h1>
            </div>

            <div className="text-stone-600 font-medium flex flex-col gap-y-2 mt-6">
              <p>Easy Customizable</p>
              <p>Commercia license</p>
              <p>5 user license</p>
              <p>Hotline support 24/7</p>
            </div>

            <div>
              <button className="bg-blue-800 text-white font-semibold py-2.5 p-2 px-8 mt-9">
                TRY THIS PACKAGE{" "}
              </button>
            </div>
          </div>
        </div>

        {/* premium */}

        <div className=" bg-[rgba(255, 255, 255, 1)] shadow-xl  px-4 h-[440px]">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-6 flex flex-col gap-y-3">
              <h2 className="text-xl text-black font-semibold">premium</h2>
              <p
                className="w-40
           border-2 border-black font-bold"
              ></p>
              <h1 className="text-black text-3xl font-semibold">$49/mo</h1>
            </div>

            <div className="text-stone-600 font-medium flex flex-col gap-y-2 mt-6">
              <p>Easy Customizable</p>
              <p>Commercia license</p>
              <p>10 user license</p>
              <p>Hotline support 24/7</p>
            </div>

            <div>
              <button className="bg-blue-200 text-blue-500 font-semibold py-2.5 p-2 px-8 mt-9">
                TRY THIS PACKAGE{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
