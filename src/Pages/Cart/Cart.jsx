
import { useContext, useEffect } from "react";

import { CartContext } from "../../Context/Cart.Context";
import Loading from "../../Components/Loading/loading";
import CartItem from "../../Components/Cartitem/CartItem";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTheme } from "../../Context/ThemeContext";

export default function ShoppingCart() {
   let{GetCartCourses , CourseInfo , ClearCart} = useContext(CartContext)     
   const { theme } = useTheme();
   console.log(".......")
   console.log(CourseInfo)
    useEffect(()=>{
        GetCartCourses()
    } ,[])

    
    return (
        
       <>
      <Helmet>
      <title>Cart Page</title>
      <meta name="description" content="Bright-routes | Cart page" />
    </Helmet>
       {CourseInfo == null ? <Loading/>: 
       <div 
       className={`flex flex-col md:flex-row items-start justify-between gap-6 p-4 shadow-md md:my-6 rounded-md border-2 border-primary-500 border-opacity-30"${
        theme === "dark"
          ? "border-gray-700 bg-gray-800 text-white"
          : "border-primary-500 border-opacity-30 bg-white text-black"
      }`}>
        <section className="basis-3/4" >
        <div className="flex gap-8 items-center mb-6 mt-5  ">
            <i className="fa-brands fa-opencart text-3xl ml-2 md:ml-0"></i>
            <h2 className=" -ml-4 md:-ml-0 text-xl text-slate-600 font-semibold pl-4 relative before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-1 before:top-1/2 before:-translate-y-1/2">Your Shopping Cart</h2>
            </div>
        {CourseInfo?.data?.items == 0 ?<div 
        className={`mt-6 bg-gray-200 p-5 rounded-md shadow-md flex justify-center items-center flex-col gap-2 
          ${
            theme === "dark"
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-primary-500 border-opacity-30 bg-white text-black"
          }
        `}>
            <h2>
               Oops! Your Cart is empty , Start Shopping now by Clicking the button below and find something you love !
            </h2>
            <Link to="/" className="btn bg-primary-600 hover:bg-primary-700 transition-colors duration-300 cursor-pointer text-white"> 
                Back to Home
            </Link>
         </div> :(
         <div className=" space-y-2  mt-6">
            {CourseInfo.data.items.map((course)=>(
             <CartItem key = {course.id} courseinfo={course} />
            ))
            }
             
         </div>
         
        ) }
        </section>
        <div 
        className={`bg-gray-200 h-80 shadow-lg rounded-lg md:mt-12 p-6 w-80 mx-6 border-2 border-primary-500 border-opacity-30 ${
          theme === "dark"
            ? "border-gray-700 bg-gray-800 text-black"
            : "border-primary-500 border-opacity-30 bg-white text-black"
        }
        `}>
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between text-gray-700">
        <span>Subtotal:</span>
        <span className="font-medium">{CourseInfo.data.totalPirce}$</span>
      </div>
      <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>{CourseInfo.data.totalPirce}$</span>
      </div>
      <Link to={"/checkout"} className="bg-blue-600 text-white block text-center w-full py-2 mt-4 rounded-md hover:bg-blue-700">
        Proceed to Checkout
      </Link>
      <Link to={"/courses"} className="text-white text-center my-2 block cursor-pointer btn w-full bg-green-600 hover:bg-green-700">
        Continue Shopping
      </Link>
      <button className="btn w-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300 cursor-pointer"
          onClick={()=>{
            ClearCart(CourseInfo.data.id)
          }}
         >
         <i className="fa-solid fa-trash mr-2"></i>
            Clear Cart</button>
       </div>
        </div>
        }
        
       </>
      );
}


 