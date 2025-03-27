import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cart.Context";

// eslint-disable-next-line react/prop-types
export default function CourseItem({ CourseInfo }) {
  // Destructure the course information dynamically
  // eslint-disable-next-line react/prop-types
  const { id, name, price, updatedDate, pictureUrl, instructorName, createdDate, description } = CourseInfo;
  let{addCourseToCart} = useContext(CartContext)
  return (
    <div className="w-80 sm:w-full Card group/card shadow-lg overflow-hidden rounded-lg">
      <div className="relative">
        <img src={pictureUrl} alt={name} className="w-full h-72 object-cover" />
        <div className="layer group-hover/card:opacity-100 opacity-0 transition-opacity duration-300 absolute w-full h-full inset-0 bg-black bg-opacity-15 flex justify-center items-center gap-2">
          <div className="icon hover:scale-110 hover:rotate-6 transition-transform duration-300 cursor-pointer w-10 h-10 text-white bg-primary-900 rounded-full flex justify-center items-center text-sm">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div 
          onClick={()=>{
            addCourseToCart({courseId:id})
          }}
          className="icon hover:scale-110 hover:rotate-6 transition-transform duration-300 cursor-pointer w-10 h-10 text-white bg-primary-900 rounded-full flex justify-center items-center text-sm"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <Link to={`/course/${id}`} className="icon hover:scale-110 hover:rotate-6 transition-transform duration-300 cursor-pointer w-10 h-10 text-white bg-primary-900 rounded-full flex justify-center items-center text-sm">
            <i className="fa-regular fa-eye"></i>
          </Link>
        </div>
      </div>

      <div className="p-3 card-body space-y-3">
        <header>
          <h3 className="font-semibold line-clamp-1 bg-primary-500 w-fit text-white p-1 rounded-md text-sm">
            {instructorName} {/* Instructor Name dynamically inserted */}
          </h3>
          <h2 className="font-semibold my-4 text-xl text-gray-600">{name}</h2>
        </header>

        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span>{price} $</span>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <span>4.5</span> {/* You can replace this with a dynamic rating if available */}
          </div>
        </div>

        <div className="text-gray-500 text-xs mt-2">
          <p>Created: {new Date(createdDate).toLocaleDateString()}</p>
          <p>Updated: {new Date(updatedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
