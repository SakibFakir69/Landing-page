// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from '../../public/Ellipse 20.png';
import img2 from '../../public/2.png'
import img3 from '../../public/3.png'
import t from '../../public/t.svg'
function Testimonial() {


  const info=[

    {
      id:1,
      review:"Great environment to learn and grow. The team was helpful and supportive throughout",
      name:"Wilson Bergson",
      title:"Marketing manager",
      photo:img1,
    },
     {
      id:2,
      review:"Learned a lot in a short time thanks to the team’s support and guidance",
      name:"Zaire Aminoff",
      title:"Marketing manager",
      photo:img2,
    },
     {
      id:3,
      review:"Amazing learning culture and team support!",
      name:"Ryan Press",
      title:"Marketing manager",
      photo:img3
    },

  ]















  // use swiper js

  return (
    <div className="bg-white md:p-10 p-4 w-full">

      <section className="w-full">
        <div className="flex justify-center items-center flex-col gap-y-6">
          <h1 className="md:text-5xl text-3xl font-semibold text-black ">Let’s see our User’s Review</h1>
          <p className="text-black md:w-1/2 w-full">
            Discover how Codext is helping businesses simplify operations, boost productivity, and deliver amazing experiences. Here’s what our users have to say.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center  h-[300px] md:mt-4 mt-8 w-full">

        <Swiper
        className="flex justify-center items-center w-full"
          // install Swiper modules
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
       
          autoplay={{ disableOnInteraction: false, delay: 3000 }}
          breakpoints={{
            760:{slidesPerView:2},
            640:{slidesPerView:1}
          }}
       
      
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          
    

            {
              info.map((item,key)=>(

              <SwiperSlide>
                  <div key={key} className="border-2 md:w-2/3 p-4  bg-[rgba(255, 255, 255, 1)] shadow-xl rounded border-none">

                  <i className="md:w-44 w-full text-black "> <img src={t} className="-mt-2"/> {item.review}...  </i>

                  <div className="flex items-center gap-x-6 gap-y-4 mt-8">

                    <div>
                      <img className="md:size-10" src={item.photo} alt={item.name}/>
                    </div>

                    <div className="">
                      <p className="text-black md:text-xl font-medium">{item.name}</p>
                      <p className="text-black">{item.title}</p>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
              ))
            }

          
        
         
        </Swiper>
      </section>
    </div>
  );
}

export default Testimonial;
