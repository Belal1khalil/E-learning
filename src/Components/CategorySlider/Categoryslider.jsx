import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Loading from "../Loading/loading"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css'
import { useContext } from "react"
import { CartContext } from "../../Context/Cart.Context"

export default function Categoryslider() {
      const {addCourseToCart} = useContext(CartContext)

  async function CategprySlider() {
    const options = {
      url: "https://brightminds.runasp.net/api/Course",
      method: "GET",
      params: {
        pageSize: 10
      }
    }
    return axios.request(options)
  }

  let { data, isLoading } = useQuery({
    queryKey: ["categoryslider"],
    queryFn: CategprySlider,
    refetchOnMount: false
  })

  if (isLoading) return <Loading />

  return (
    <>
      <section>
        <h2 className="relative text-center font-semibold my-11 text-3xl text-primary-500">
          Popular Courses
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 h-0.5 bg-primary-600"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 h-0.5 bg-primary-400"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-40 h-0.5 bg-primary-400"></div>
        </h2>

        {data.data.data && (
          <Swiper
            loop={false}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {data.data.data.items.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="w-full max-w-sm shadow-lg overflow-hidden rounded-md bg-white">
                  <img
                    src={course.pictureUrl}
                    className="w-full h-48 object-cover"
                    alt={course.name}
                  />
                  <p className="text-center text-xl text-primary-500 font-semibold py-2">
                    {course.price} L.E
                  </p>
                  <p className="text-yellow-500 text-xl text-center flex justify-center items-center gap-2">
                    {course.rate}
                    <i className="fa-solid fa-star text-sm"></i>
                  </p>
                  <p className="px-3 text-center font-bold text-md">{course.name}</p>
                  <div className="date space-y-2 my-4">
                    <p className="px-6 font-bold">
                      <span className="text-primary-500">Name</span>: {course.instructorName}
                    </p>
                    <p className="px-6 font-bold">
                      <span className="text-primary-500">Created Date</span> : {course.createdDate}
                    </p>
                    <p className="px-6 font-bold">
                      <span className="text-primary-500">Updated Date</span> : {course.updatedDate}
                    </p>
                  </div>
                  <div className="px-6 pb-4 flex flex-wrap gap-3 justify-center">
                    <a
                      href={`/course/${course.id}`}
                      className="bg-primary-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-primary-600 transition duration-300 ease-in-out"
                    >
                      View Course
                    </a>

                    <button
                      className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out"
                      onClick={()=>{
                        addCourseToCart({courseId:course.id})

                      }} // Replace with cart logic
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  )
}
