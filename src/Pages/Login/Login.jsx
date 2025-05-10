
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [accoutExistError, setaccoutExistError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  async function SendDataToLogIn(values) {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: "https://brightminds.runasp.net/api/Account/login",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Logged in successfully");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setaccoutExistError(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
    }
  }

  const validationSchema = object({
    Email: string()
      .required("Email is required")
      .email("Email is invalid"),
    Password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema,
    onSubmit: SendDataToLogIn,
  });

  return (
    <form
      className="mt-10 md:mt-20 lg:mt-24 space-y-6 shadow-lg border border-gray-200 rounded-xl p-6 sm:w-full lg:w-1/2 m-auto bg-white"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="text-center text-3xl font-bold text-primary-500 mb-8">
        <i className="fa-regular fa-user mr-2"></i> Log In
      </h2>

      {/* Email Field */}
      <div>
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          className="form-control w-full border rounded-lg px-4 py-2 focus:outline-primary-500"
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.Email && formik.touched.Email && (
          <p className="text-sm text-red-500 font-semibold mt-2">
            * {formik.errors.Email}
          </p>
        )}
        {accoutExistError && (
          <p className="text-sm text-red-500 font-semibold mt-2">
            * {accoutExistError}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="Password"
          placeholder="Enter your password"
          className="form-control w-full border rounded-lg px-4 py-2 pr-10 focus:outline-primary-500"
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
        </span>
      </div>
      {formik.errors.Password && formik.touched.Password && (
        <p className="text-sm text-red-500 font-semibold mt-2">
          * {formik.errors.Password}
        </p>
      )}

      {/* Forgot Password */}
      <div className="flex justify-end">
        <Link
          to="/forgetpassword"
          className="text-primary-500 text-sm font-semibold hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="btn bg-primary-500 hover:bg-primary-600 w-full text-white uppercase mt-4 rounded-lg py-2 font-bold"
        >
          Log In
        </button>
      </div>
    </form>
  );
}
