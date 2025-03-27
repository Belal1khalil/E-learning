import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/loading";
import { Pagination } from "antd";

import InstructorsCard from "../../Components/instructorss/instructors";
import { Helmet } from "react-helmet";


export default function InstructorsPage() {
    const [instructors, setInstructors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
  
    async function GetInstructors(pageIndex) {
      setIsLoading(true);
      try {
        const options = {
          url: "https://brightminds.runasp.net/api/Instructor",
          method: "GET",
          params: {
            pageSize: 8,
            pageIndex,
            SearchName: null,
          },
        };
        const response = await axios.request(options);
        setInstructors(response.data.data.items);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
        GetInstructors(currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
    }, [currentPage]);
  
    if (isLoading) return <Loading />;
  
    return (
     <>
     <Helmet>
      <title>Instructors Page</title>
     </Helmet>
      <div className="flex flex-col justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {instructors.map((instructor) => (
            <InstructorsCard CardInfo={instructor} key={instructor.userId
                } />
          ))}
        </div>
        <Pagination
          current={currentPage}
          onChange={setCurrentPage}
          total={20} // Update based on API total count
          pageSize={8}
          showSizeChanger={false}
          style={{ marginTop: 20, textAlign: "center" }}
        />
      </div>
     </>
    );
}
