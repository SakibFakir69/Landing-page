import React from "react";
import support from "../../assets/Animation - 1750756020491.json";
import Lottie from "lottie-react";

function Features() {
  return (
    <div className="md:flex bg-white p-14 gap-9 ">
      {/* photo */}

      <section className="">
        <Lottie animationData={support} loop={true} />
      </section>
      {/* text */}

      <section className="flex flex-col gap-y-6 py-10">

        <h2 className="text-black text-5xl font-semibold">
          It’s very helpful for operating system
        </h2>

        <div>

          <div className="flex items-center gap-3">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/arrow--v1.png"
              alt="arrow--v1"
            />
            <h3 className="text-2xl text-black font-semibold">Ultra fast & Secure</h3>
          </div>
          <p className="text-slate-900 ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color-glass/48/arrow--v1.png"
              alt="arrow--v1"
            />
            <h3 className="text-2xl text-black font-semibold">Allows customization</h3>
          </div>

          <p className="text-slate-900  ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/lollipop/48/arrow.png"
              alt="arrow"
            />
            <h3 className="text-2xl text-black font-semibold">Smart contract</h3>
          </div>
          <p className="text-slate-900 ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
            Consequat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
