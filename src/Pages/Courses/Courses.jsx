import { useState, useEffect } from "react";
import { Pagination } from "antd";
import axios from "axios";
import Loading from "../../Components/Loading/loading";
import CourseItem from "../../Components/Courses/Courseitem";
import { Helmet } from "react-helmet";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function GetCourses(pageIndex) {
    setIsLoading(true);
    try {
      const options = {
        url: "https://brightminds.runasp.net/api/Course",
        method: "get",
        params: {
          pageSize: 10,
          pageIndex,
          SearchName: null,
          InstructorId: null,
          CategoryId: null,
        },
      };
      const response = await axios.request(options);
      setCourses(response.data.data.items);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    GetCourses(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  }, [currentPage]);

  if (isLoading) return <Loading />;

  return (
    
  <>
  <Helmet>
   <title>Courses Page</title>
  </Helmet>
    <div className="flex flex-col justify-center items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {courses.map((Course) => (
          <CourseItem CourseInfo={Course} key={Course.id} />
        ))}
      </div>
      <Pagination
        current={currentPage}
        onChange={setCurrentPage}
        total={50} // Update based on API total count
        pageSize={10}
        showSizeChanger={false}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </div>
  </>
  );
}
