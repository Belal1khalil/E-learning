/* eslint-disable react/jsx-no-duplicate-props */
import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
     let {setToken} = useContext(UserContext)
     const navigate =  useNavigate()
     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  
     const[accoutExistError ,setaccoutExistError] = useState(null)
     
    async function SendDataToLogIn(values) {
        let toastId = toast.loading("Waiting......")
       try {
        const options = {
            url:"https://brightminds.runasp.net/api/Account/login",
            method:"POST",
            data:values,
        }
            let {data} = await axios.request(options)
            if(data.message == "success") {
                localStorage.setItem("token" , data.token)
                setToken(data.token)
              toast.success("User Logged In Succeffully")
              setTimeout(() => {
                navigate("/")
              }, 2000);
            }
            console.log(data)
       } catch (error) {
        toast.error(error.response.data.message)
        setaccoutExistError(error.response.data.message)
       } finally {
         toast.dismiss(toastId)
       }
    }

    const validationSchema = object({
        Email:string().required("Email is required").email("Email is invalid"),
        Password:string().required("Password is required").matches(passwordRegex , "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    });

    const formik = useFormik({
        initialValues:{
            "Email":"",
            "Password":"",
        },
        validationSchema,
        onSubmit: SendDataToLogIn,
        });

   
   return <>
    <form className=" mt-8 md:mt-28 lg:mt-28 relative space-y-3 shadow-lg border-4 py-5 px-3 sm:w-full lg:w-1/2 m-auto" onSubmit={formik.handleSubmit}>
        <h2 className="text-center text-3xl font-semibold text-primary-500 mb-11">
        <i className="fa-regular fa-user mr-2"></i>
         Log In</h2>
       
        
        <div className="email">
         <input type="email"
         placeholder="Email Address"
         className="form-control w-full"
         value={formik.values.Email}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Email"
         />
         {formik.errors.Email && formik.touched.Email && 
         <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.Email}</p>
          }
          {
          accoutExistError && <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
                * {accoutExistError}</p>
         }
        </div>
        <div className="password">
         <input type="password"
         placeholder="Enter your password"
         className="form-control w-full"
         value={formik.values.Password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Password"
         />
        </div>
        <div className="flex justify-end">
          <Link
            to="/forgetpassword"
            className="text-primary-500 text-sm font-semibold hover:underline"
          >
            Forgot your password ?
          </Link>
        </div>
       
       <div className="flex items-center justify-center">
        <button type="submit" className="btn bg-primary-500 hover:bg-primary-600   w-full text-white uppercase mt-5">log in</button>
       </div>
     </form>
    </>
}

