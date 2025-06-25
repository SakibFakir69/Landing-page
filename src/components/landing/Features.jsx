import React from "react";
import support from "../../assets/Animation - 1750756020491.json";
import Lottie from "lottie-react";

function Features() {
  return (
    <div className="lg:flex bg-white p-14 gap-9 ">
      {/* photo */}

      <section className="">
        <Lottie animationData={support} loop={true} />
      </section>
      {/* text */}

      <section className="flex flex-col gap-y-6 py-10">

        <h2 className="text-black md:text-5xl text-3xl font-semibold">
           Empowering Your Business with Smart Cloud Services
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
             Our platform ensures lightning-fast performance with enterprise-grade security protocols, keeping your data safe and your users happy.
    
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
              Tailor the system to match your business needs with our flexible and modular components—easily adapt layouts, workflows, and permissions.
    
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
             Automate repetitive tasks and streamline your business processes using intelligent triggers and smart contract logic—boosting productivity.
 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
