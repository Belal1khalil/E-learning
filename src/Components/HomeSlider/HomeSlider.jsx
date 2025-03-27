import course1 from "../../assets/img/carousel-1.jpg"
import course2 from "../../assets/img/carousel-2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function HomeSlider() {
  return (
    <section>
      <div className="  ">
        <Swiper loop={false}  
        modules={[Autoplay]} 
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        >
        <SwiperSlide>
     <div className=" relative h-screen md:h-auto">
          <img  src={course1} alt=""
          className=" w-full h-full md:h-auto object-cover rounded-md"
           />
          <div className="absolute   inset-0 flex flex-col justify-center px-12  space-y-5 bg-gray-800 bg-opacity-75 text-white">
             <h4 className="uppercase mt-72 md:mt-0 text-2xl font-bold text-primary-600">Best Online Courses</h4>
             <h1 className="text-4xl font-bold md:text-6xl">
                 The Best Online Learning <br/> Platform
             </h1>
                <p className="text-white max-w-2xl">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd
             rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                </p>
                <div className="space-x-4">
          <button className="btn px-6 py-3 bg-primary-500 hover:bg-primary-600 font-semibold">
            Read More
          </button>
          <button className="btn  px-6 py-3 bg-slate-100 hover:bg-slate-200 transition-all text-black font-semibold">
            Join Now
          </button>
        </div>
            </div>
           
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative h-screen md:h-auto">
          <img  src={course2} alt=""
          className="w-full  h-full md:h-auto object-cover"
           />
          <div className="absolute inset-0 flex flex-col justify-center px-12 space-y-5 bg-gray-800 bg-opacity-75 text-white">
             <h4 className="uppercase mt-72 md:mt-0 text-2xl font-bold text-primary-600">Best Online Courses</h4>
             <h1 className="text-4xl font-bold md:text-6xl">
                 Get Educated Online From <br /> Your Home
             </h1>
                <p className="text-white max-w-2xl">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd
             rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.
                </p>
                <div className="space-x-4">
          <button className="btn px-6 py-3 bg-primary-500 hover:bg-primary-600 font-semibold">
            Read More
          </button>
          <button className="btn  px-6 py-3 bg-slate-100 hover:bg-slate-200 transition-all text-black font-semibold">
            Join Now
          </button>
        </div>
  </div>
           
        </div>
        </SwiperSlide>
        </Swiper>
      </div>
  

    </section>
  )
}

