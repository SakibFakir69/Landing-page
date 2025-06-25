import React from "react";
import Lottie from "lottie-react";
import heroImg from "../../assets/Animation - 1750754475296.json";

function Hero() {
  const options = {
    animationData: heroImg,
    loop: true,
  };

  return (
    <div className=" flex w-full justify-center items-center flex-col  p-14 bg-white">
      {/* text */}

      
        <h2 className="md:text-5xl text-3xl font-bold text-black">
          {" "}
          Codext one of the best system in{" "}
          <span className="text-blue-400">SAAS</span>.
        </h2>

        <p className="text-stone-600 md:max-w-2/3 mt-8 ">
          Software as a Service (SaaS) has changed the application usage model
          for both business and individual sectors. Through cloud access users
          no longer need to manage installations or updates of their tools.
        </p>
        <div>
         
        </div>
      
    



      <img src="/original-f02b3941d85e5361aba00aed39bc2ee7.webp" className="rounded border-2 p-3 mt-6 shadow-xl rounded"/>
       <button className="px-10 cursor-pointer py-3 hover:bg-blue-400 text-white bg-blue-500 font-semibold rounded mt-4">
            Try A Live Demo
          </button>


      
    </div>
  );
}

export default Hero;
