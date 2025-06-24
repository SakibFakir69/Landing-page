import React from "react";

function News() {
  return (
    <div className="bg-white p-10 flex justify-center items-center flex-col">
      <section className="mb-4">
        <div>
          <h2 className="text-4xl font-semibold text-center text-black">
            Lastest insights news
          </h2>
        </div>
      </section>
      {/* 1 */}

      <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-7 mt-6 ">

        <section className="px-2 bg-[rgba(255, 255, 255, 1)] shadow-xl rounded">

          <div className="p-2 px-4">
            <div className="">
              <img
                className="h-[300px]"
                src={"/Rectangle 32.png"}
                alt="photo"
              />
            </div>

            <div className="flex flex-col gap-y-4 mt-4">
              <div className="flex gap-x-4 text-black">
                <p>Our Creative Team</p>
                <p>17 June, 2021</p>
                <p>by Stive Smithi</p>
              </div>
              <h2 className="text-2xl font-semibold text-black">
                Running remote offsites and onbordings
              </h2>
              <p className="text-stone-800 md:w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et
                vel tellus dignissim quis.
              </p>
              <div>
                <button className="bg-blue-500  hover:bg-blue-600 px-10 py-2.5 rounded">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section className="px-2  bg-[rgba(255, 255, 255, 1)] shadow-xl rounded">
          <div className="px-4 p-2">
            <div>
              <img
                className="h-[300px]"
                src={"/Rectangle 33.png"}
                alt="photo"
              />
            </div>

            <div className="flex flex-col gap-y-4 mt-4">
              <div className="flex gap-x-4 text-black">
                <p>Create presentations</p>
                <p>17 June, 2021</p>
                <p>by Thomas lews</p>
              </div>
              <h2 className="text-2xl font-semibold text-black">
                Running remote offsites and onbordings
              </h2>
              <p className="text-stone-800 md:w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et
                vel tellus dignissim quis.
              </p>
              <div>
                <button className="bg-blue-500 hover:bg-blue-600 px-10 py-2.5 rounded mb-4">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default News;
