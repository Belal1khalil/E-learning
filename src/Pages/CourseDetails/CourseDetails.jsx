import axios from "axios"
import React, { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/loading";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart.Context";
import useOnline from "../../hooks/useOnline";
import { Helmet } from "react-helmet";

export default function CourseDetails() {
  const [CourseDetails, setCourseDetails] = useState(null);
  const [sectionVideos, setSectionVideos] = useState({});
  const [openItems, setOpenItems] = useState({});
  const { addCourseToCart } = useContext(CartContext);
  const { id } = useParams();
  let isOnline = useOnline()

  // Fetch Course Details
  async function getCourseDetails() {
    try {
      const options = {
        url: `https://brightminds.runasp.net/api/Course/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      setCourseDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch Section Videos (Per Section)
 
  async function getSectionVideos(sectionId) {
    try {
      const options = {
        url: `https://brightminds.runasp.net/api/Video/section/${sectionId}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      console.log("........")
        console.log(data)
      // Store videos separately for each section
      setSectionVideos((prev) => ({
        ...prev,
        [sectionId]: data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  // Toggle section open/close
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state for the clicked item
    }));
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  return (
    <>
    <Helmet>
     <title>CourseDetails Page</title>
    </Helmet>
      
      {CourseDetails ? (
        <>
        <Helmet>
          <title>{CourseDetails.name}</title>
        </Helmet>
        <section>
          <div className="flex gap-6 flex-col md:flex-row mx-auto px-4 py-8 border-2 border-primary-400 border-opacity-30">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-primary-400 border-opacity-30">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={CourseDetails.pictureUrl}
                  className="w-full h-full object-cover"
                  alt="Course"
                />
              </div>
              <div className="px-6 py-4">
                <h1 className="text-3xl font-bold text-gray-800">{CourseDetails.name}</h1>
                <p className="text-primary-500 mt-2">Created Date: {CourseDetails.createdDate}</p>
                <p className="text-primary-500 mt-2">Price: {CourseDetails.price}$</p>
                <p className="text-primary-500 mt-2">Instructor: {CourseDetails.instructorName}</p>
                <p className="text-gray-700 mt-4">{CourseDetails.description}</p>
              </div>

              {/* Course Content */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Content:</h2>
                <div className="w-full overflow-hidden border border-gray-200 rounded-lg">
                  <table className="w-full">
                    <tbody>
                      {CourseDetails.sections.map((item, index) => (
                        <React.Fragment key={index}>
                          {/* Section Row */}
                          <tr
                            className="bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                            onClick={() => {
                              toggleItem(index);
                              getSectionVideos(item.id); // Fetch videos for this section
                            }}
                          >
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className="mr-2">
                                  {openItems[index] ? (
                                    <i className="fa-solid fa-chevron-up text-gray-600"></i>
                                  ) : (
                                    <i className="fa-solid fa-chevron-down text-gray-600"></i>
                                  )}
                                </span>
                                <span className="font-medium text-gray-800">{item.name}</span>
                              </div>
                            </td>
                          </tr>

                          {/* Videos (If Section is Open) */}
                          {openItems[index] && (
                            <tr>
                              <td colSpan="2" className="p-4 bg-white">
                                <div className="pl-6">
                                  {sectionVideos[item.id] ? (
                                    sectionVideos[item.id].map((video) => (
                                      <li key={video.id} className="flex justify-between items-center text-xl py-2">
                                        <Link to="/video"className="hover:underline">{video.name}</Link>
                                       <span className="text-gray-500 text-sm">({video.duration}m)</span>
                                     </li>
                                    ))
                                  ) : (
                                    <p>Loading videos...</p>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add to Cart Button */}
             {isOnline && (
               <button
               onClick={() => addCourseToCart({ courseId: id })}
               className="bg-blue-600 text-white px-6 py-2 mx-6 mb-6 rounded-lg hover:bg-blue-700 transition duration-300"
             >
               Add to Cart
             </button>
             )
             }
            </div>
          </div>
        </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}




