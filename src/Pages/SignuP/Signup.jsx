/* eslint-disable react/jsx-no-duplicate-props */
import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";

export default function Signup() {
      const navigate =  useNavigate()
     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
     const phoneRegex = /^(02)?01[0125][0-9]{8}$/;
     const[accoutExistError ,setaccoutExistError] = useState(null)
     // eslint-disable-next-line no-unused-vars

     
    async function SendDataToRegister(values) {
        let toastId = toast.loading("Creating user.......")
       try {
        const options = {
            url:"https://brightminds.runasp.net/api/Account/register",
            method:"POST",
            data:values,
            headers:{
              'Content-Type': 'multipart/form-data',
            }
        }
            let {data} = await axios.request(options) 
            if(data.message == "success") {
              toast.success(" Please, Check Your Email")
              setTimeout(() => {
                navigate(`/authemail?email=${data.user.email}&displayName=${data.user.displayName}`)
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
        FirstName:string().required("FirstName is required").min(3,"Name must be at least 3 char").max(25,"Name can not be more than 25 char"),
        LastName:string().required("LastName is required").min(3,"Name must be at least 3 char").max(25,"Name can not be more than 25 char"),
        Email:string().required("Email is required").email("Email is invalid"),
        Password:string().required("Password is required").matches(passwordRegex , "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        ConfirmPassword:string().required("Confirm password is required").oneOf([ref("Password")]),
        Mobile:string().required("Phone is required").matches(phoneRegex,"Sorry , We Accept Egyption Phone Numbers Only")
    })

    const formik = useFormik({
        initialValues:{
            "Email":"",
            "Password":"",
            "ConfirmPassword":"",
            "FirstName":"",
            "LastName":"",
            "Mobile":"",
            "Image":""
        },
        validationSchema,
        onSubmit: async (values) => {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });
          await SendDataToRegister(formData);
        },
    });
   
   return <>
     <form className=" mt-8 space-y-3 shadow-lg py-5 px-3  lg:w-1/2 m-auto" onSubmit={formik.handleSubmit}>
        <h2 className="text-center text-3xl font-semibold text-primary-500 mb-11">
        <i className="fa-regular fa-user mr-2"></i>
         Register Now</h2>
        <div className="firstname " >
         <input 
         type="text"
         placeholder="Enter your first name"
         className="form-control w-full"
         value={formik.values.FirstName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="FirstName"
         />
         {formik.errors.FirstName && formik.touched.FirstName &&
               <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.FirstName}</p>
         } 
         {
          accoutExistError && <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
                * {accoutExistError}</p>
         }
        </div>
        <div className="lastname">
         <input type="text"
       
         placeholder="Enter your last name"
         className="form-control w-full"
         value={formik.values.LastName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="LastName"
         /> 
         {
            formik.errors.LastName && formik.touched.LastName &&
            <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.LastName}</p>
         }
         {
         
         }
        </div>
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
         {formik.errors.Password && formik.touched.Password && 
         <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.Password}</p>
          }
          {
          
         }
        </div>
        <div className="RePassword">
         <input type="password"
   
         placeholder="Confirm Password"
         className="form-control w-full"
         value={formik.values.ConfirmPassword}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="ConfirmPassword"
         />
         {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword &&
         <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.ConfirmPassword}</p>

         }
         {
          
         }
        </div>
        <div className="phone">
         <input type="tel"
        
         placeholder="Phone number"
         className="form-control w-full"
         value={formik.values.Mobile}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         name="Mobile"
         />
          {formik.errors.Mobile && formik.touched.Mobile &&
         <p className="text-sm text-red-500 font-semibold mt-2 ml-2">
            * {formik.errors.Mobile}</p>
          }
          {
         
         }
        </div>
       <div className="flex items-center justify-center">
        <button 
        type="submit" 
        className="btn bg-primary-500 hover:bg-primary-600   w-full text-white uppercase mt-5"
        
        >Sign up
        </button>
       </div>
     </form>
   
   
    </>
}

