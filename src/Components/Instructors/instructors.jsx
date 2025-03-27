import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Loading from "../Loading/loading"
import InstructorCard from "../Instructor/InstructorCard"

export default function Instructors() {
    async function GetPopularInstruc() {
        const options = {
            url:"https://brightminds.runasp.net/api/Instructor",
            method:"get",
            params:{
                PageSize: 5,
                pageIndex:3,
            }
        }
        return  await axios.request(options)
    }
 
   const{data , isLoading} = useQuery({
    queryKey:["instructors"],
    queryFn:GetPopularInstruc,
   })
   console.log(data)

   if(isLoading) return <Loading/>
 return <>
     <div>
  <h1 className="text-center text-2xl uppercase text-primary-500 font-semibold mt-12">Instructors</h1>
  <div className="w-16 h-0.5 bg-primary-500 mx-auto mt-2"></div>
  <div className="w-12 h-0.5 bg-primary-500 mx-auto mt-1"></div>
    </div>
    <h1 className="text-4xl  text-center mt-3 mb-14 font-bold"> Expert Instructors</h1>
    <div className="flex flex-col md:flex-row   gap-8">
    {data.data.data.items.map((item)=>(
     <InstructorCard itemInfo={item} key={item._id}/>
    ))

    }
    </div>
    </>

}
