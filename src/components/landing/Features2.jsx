import React from "react";

function Features2() {
  const Provides = [
    {
      id: 1,
      photo: "https://img.icons8.com/3d-fluency/94/source-code.png",
      title: "Clean Code",
      description: "Our platform is built with clean, maintainable code ensuring reliability, scalability, and easy updates.",
    },
    {
      id: 2,
      photo: "https://img.icons8.com/nolan/64/web-analystics.png",
      title: "Data Analytic",
      description: "Gain deep insights with powerful analytics that help you track user behavior and business performance.",
    },
    {
      id: 3,
      photo: "https://img.icons8.com/color/48/security-checked--v1.png",
      title: "Fully Secured",
      description: "We prioritize your security with industry-standard encryption and compliance to protect your data.",
    },
    {
      id: 4,
      photo: "https://img.icons8.com/color/48/customer-support.png",
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or issues.",
    },
  ];

  return (
    <div className="bg-white w-full p-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-semibold text-black md:w-1/2">
          We Provides best Feature for customar
        </h1>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {Provides.map((item, key) => (
          <div
            key={key}
            className="border flex justify-center items-center flex-col text-center bg-[rgba(255, 255, 255, 1)] shadow-xl  rounded border-teal-300/20 hover:bg-teal-400/10"
          >
            <div className="p-2 border border-blue-200 rounded-full bg-blue-100 mt-4">
              <img className="size-10" src={item.photo} alt={item.title} />
            </div>

            <div className=" ">

              <div className="mt-4 flex flex-col gap-y-8 p-4">
                <h2 className="text-black text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-stone-600">{item.description}</p>
              </div>
              <button
                className="border border-blue-400 rounded-full  mt-4 mb-4 p-2 hover:bg-teal-300/10 
            hover:border-blue-50/10 transition duration-300 delay-200 cursor-pointer"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/softteal-color/24/arrow.png"
                  alt="arrow"
                />
              </button>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default Features2;
