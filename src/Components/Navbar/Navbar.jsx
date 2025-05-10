import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/Cart.Context";
import { useTheme } from "../../Context/ThemeContext";
import { FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {token , logOut} = useContext(UserContext)
  let {CourseInfo} = useContext(CartContext)

  const { theme, toggleTheme } = useTheme();
  return (
    <>
  <nav className={`navbar py-5 shadow-md fixed top-0 right-0 left-0 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-10`}>
        <div className="md:px-9  flex justify-between items-center">
          {/* Logo */}
          <div className="logo mr-6 space-x-2">
          <i className="fa-solid fa-brain text-2xl ml-2  text-primary-500"></i>
            <a href="" className="text-2xl font-bold text-primary-500">
              Bright-Routes
            </a>
          </div>

          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>

          {/* Navigation Links */}
          <ul
            className={`absolute  md:flex md:items-center md:gap-5 md:static top-20 right-0 left-0 bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-5 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {token && (
              <>
              <li >
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-500 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-500 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/Cart"
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/Courses"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/instructors"
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before:w-full font-semibold" : ""
                  }`;
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
              
              </>
            )}

            {/* Logout Button (Visible on Mobile) */}
            {!token && (
              <>
              <li className="text-lg md:hidden">
              <Link to="/signup"
                className="flex items-center gap-2 font-medium  transition-colors duration-300"
              >
                Signup
              </Link>
            </li>
             <li className="text-lg md:hidden">
              <Link to="/login"
                className="flex items-center gap-2 font-medium  transition-colors duration-300"
              >
                Login
              </Link>
            </li>
              </>
            )

            }
          </ul>
         
          {/* Cart Icon */}

         
        <div className="flex gap-6   ml-auto">
         <FaMoon className="text-xl font-semibold cursor-pointer" onClick={toggleTheme} />
        {token && (
          <>
           <Link to="/cart" className="cart relative  md:block">
            <i className="fa-solid fa-cart-shopping "></i>
            <div className="counter absolute w-5 h-5 rounded-full bg-primary-500 flex justify-center items-center text-white text-md  font-semibold top-0 right-0 translate-x-1/2 -translate-y-1/2">

              {CourseInfo?.data?.items?.length > 0 ? CourseInfo.data.items.length : 0}
            </div>
          </Link>
          </>
         )}

            {token && (
            <>
             <li onClick={logOut}
              className="text-xl list-none   hover:text-red-600 transition-colors duration-300">
              <Link to="/login"
                className="flex items-center gap-2"
              >
                <i className=" fa-solid fa-right-from-bracket "></i>
              </Link>
            </li>
            </>
           )

           }
        </div>

          {/* Auth Links (Visible on Desktop) */}
          <ul className="hidden md:flex justify-center items-center gap-4">
           {!token && (
            <>
             <li className="text-xl font-semibold">
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before-w-full font-semibold" : ""
                  }`;
                }}
                to="/signup"
              >
                Sign up
              </NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink
                className={({ isActive }) => {
                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${
                    isActive ? "before-w-full font-semibold" : ""
                  }`;
                }}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            </>
           )}
           
          </ul>
        </div>
      </nav>
    </>
  );
}































// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//     return <>
//      <nav className=" navbar py-5 shadow-md fixed top-0 right-0 left-0">
//         <div className="container flex justify-between items-center ">
//             <div className="logo space-x-2">
//             <i className="fa-solid fa-book text-2xl text-primary-500"></i>
//              <a href="" className="text-2xl font-bold text-primary-500">e-LEARNING</a> 
//             </div>
//            <ul className="flex   items-center gap-5">
//             <li className="text-lg">
//               <NavLink className={({isActive})=>{
//                return ` relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-500 before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-semibold":""}`
//               }} 
//               to="/">
//               Home</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({isActive})=>{
//                  return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-500 before:left-0 before:-bottom-1 ${isActive ?"before:w-full font-semibold" :""}`
//                 }} to="/Cart">Cart</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({isActive})=>{
//                    return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${isActive ? "before-w-full font-semibold":""}`
//                 }} to="/courses">Courses</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({isActive})=>{
//                    return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${isActive ? "before-w-full font-semibold":""}`
//                 }} to="/about">About</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({isActive})=>{
//                    return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${isActive ? "before-w-full font-semibold":""}`
//                 }} to="/contact">Contact</NavLink>
//             </li>
//            </ul>
//            <Link to="/cart" className="cart relative">
//            <i className="fa-solid fa-cart-shopping"></i>
//            <div className="counter absolute w-5 h-5 rounded-full bg-primary-500 flex justify-center items-center text-white text-sm top-0 right-0 translate-x-1/2 -translate-y-1/2">
//            <i className="fa-solid fa-spinner fa-spin "></i>
//            </div>
//            </Link>
//            <ul className="flex justify-center items-center gap-4">
//             <li>
//                 <NavLink
//                 className={({isActive})=>{
//                     return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${isActive ? "before-w-full font-semibold":""}`
//                  }} to="/signup">Sign up</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({isActive})=>{
//                    return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-300 before:left-0 before:-bottom-1 ${isActive ? "before-w-full font-semibold":""}`
//                 }} to="/login">Login</NavLink>
//             </li>
//             <li className="text-xl hover:text-red-600 transition-colors duration-300">
//             <i className="fa-solid fa-right-from-bracket"></i>
//             </li>
//            </ul>
//         </div>
//      </nav>
//     </>
// }
