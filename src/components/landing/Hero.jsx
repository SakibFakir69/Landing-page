import React from "react";
import Lottie from "lottie-react";
import heroImg from "../../assets/Animation - 1750754475296.json";

function Hero() {
  const options = {
    animationData: heroImg,
    loop: true,
  };

  return (
    <div className="bg-hero flex w-full  md:flex-row flex-col p-14">
      {/* text */}

      <section className="flex-1  flex flex-col gap-y-8 px-10 mt-12">
        <h2 className="text-5xl font-bold text-white">
          {" "}
          Codext one of the best system in{" "}
          <span className="text-blue-400">SAAS</span>.
        </h2>
        <p className="text-stone-200 max-w-80">
          Software as a Service (SaaS) has changed the application usage model
          for both business and individual sectors. Through cloud access users
          no longer need to manage installations or updates of their tools.
        </p>
        <div>
          <button className="px-10 py-3 hover:bg-blue-400 text-white bg-blue-500 font-semibold rounded">
            Try A Live Demo
          </button>
        </div>
      </section>
      {/* photo */}

      <section className="flex-1 ">
        <div className=" p-6 ">
          <Lottie height={440}  animationData={heroImg} loop={true}></Lottie>
        </div>
      </section>
    </div>
  );
}

export default Hero;
