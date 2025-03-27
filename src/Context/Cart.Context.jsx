import { createContext, useState } from "react";
import { UserContext } from "./UserContext"; 
import { useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

 // eslint-disable-next-line react-refresh/only-export-components
 export const CartContext = createContext(null)

 // eslint-disable-next-line react/prop-types
 export default function CartProvider({children}) {
  const {token} = useContext(UserContext);
  const [CourseInfo , SetCourseInfo] = useState(null)

     ////Add Course To Cart
 async function addCourseToCart({courseId}){
  let ToastId = toast.loading("Adding Course....")
    try {
        const options = {
            url:"https://brightminds.runasp.net/api/Cart",
            method:"POST",
            headers:{
             "Authorization":`Bearer ${token}`
            },
            data:{
              courseId 
            } 
           }
               let {data} =  await axios.request(options); 
               if(data.statusCode == 201) {
                toast.success("Course Added Successfully")
               }
    } catch (error) {
        console.log(error)
    }finally {
        toast.dismiss(ToastId)
    }
}
 /// getCourses
 async function GetCartCourses() {
    try {
        const options={
            url:"https://brightminds.runasp.net/api/Cart",
            method:"GET",
            headers:{
               "Authorization":`Bearer ${token}` 
            }
        }
        let {data} = await axios.request(options)
        SetCourseInfo(data)
    } catch (error) {
        console.log(error)
    }
 }

 //remove

 async function RemoveCoursefromCart({id}) {
    let ToastId = toast.loading("Deleting......")
  try {
    const options={
        url:`https://brightminds.runasp.net/api/Cart/${id}`,
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${token}` 
         }
    }
   let data =  await axios.request(options)
   if(data.data.statusCode == 204){
    toast.success("Course Deleted Successfully")
    GetCartCourses()
   }

  } catch (error) {
    console.log(error)
  }finally {
    toast.dismiss(ToastId)
  }
 }
 // ClearCart 
 async function ClearCart(id) {
    let ToastId = toast.loading("Deleting......")
    try {
        const options={
            url:`https://brightminds.runasp.net/api/Cart/clear/${id}`,
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}` 
             }
        }
       let data =  await axios.request(options)
       if(data.data.statusCode == 204){
        toast.success("Courses Deleted Successfully")
        GetCartCourses()
       }
    
      } catch (error) {
        console.log(error)
      }finally {
        toast.dismiss(ToastId)
      }
 }

    return <CartContext.Provider value={{ addCourseToCart , GetCartCourses , CourseInfo , RemoveCoursefromCart , ClearCart}}>
     {children}
    </CartContext.Provider>
 }

