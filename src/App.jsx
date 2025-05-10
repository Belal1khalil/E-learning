/* eslint-disable no-undef */
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components/LayOut/Layout";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Signup from "./Pages/SignuP/Signup";
// import { Toaster } from "react-hot-toast";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import GuestRoute from "./Components/GuestRoute/GuestRoute";
// import UserProvider from "./Context/UserContext";
// import AuthEmail from "./Pages/Auth/AuthEmail";
// import ConfirmEmail from "./Pages/ConfirmEmail/ConfirmEmail";
// import Forgetpassword from "./Pages/forgetPass/forgetPassword";
// import Confirmforgetpass from "./Pages/confirmforgetpass/confirmforgetpass";
// import ResetPassword from "./Pages/Reset/ResetPassword";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Courses from "./Pages/Courses/Courses";
// import CartProvider from "./Context/Cart.Context";
// import ShoppingCart from "./Pages/Cart/Cart";
// import CourseDetails from "./Pages/CourseDetails/CourseDetails";
// import InstructorsPage from "./Pages/instructors/instructors";
// import VideoPlayer from "./Components/courseVideo/CourseVideo";
// import Offline from "./Components/Offline/Offline";
// import CheckOut from "./Pages/CheckOut/CheckOut";


// export default function App() {
//   const router = createBrowserRouter([
//     {path:"/", element:
//        <ProtectedRoute>
//         <Layout/>
//        </ProtectedRoute>, 
//        children : [
//         {path:"/" , element:<Home/>},
//         {path:"/Courses", element:<Courses/>},
//         {path:"/cart", element:<ShoppingCart/>},
//         {path:"/course/:id", element:<CourseDetails/>},
//         {path:"/instructors", element:<InstructorsPage/>},
//         {path:"/video", element:<VideoPlayer/>},
//         {path:"/checkout", element:<CheckOut/>},    
//     ],
//     },
    
//     {path:"/", element : 
//     <GuestRoute>
//       <Layout/>
//     </GuestRoute>
//     , children : [
//       {path:"/login" , element:<Login/>},
//       {path:"/signup" , element:<Signup/>},
//       {path:"/authemail", element:<AuthEmail/>},
//       {path:"/confirmEmail", element:<ConfirmEmail/>},
//       {path:"/forgetpassword", element:<Forgetpassword/>},
//       {path:"/Confirmforgetpass", element:<Confirmforgetpass/>},
//       {path:"/ResetPassword", element:<ResetPassword/>},
   
     
//     ],
//     },
//   ]);
//   const myClient = new QueryClient()
//   return(
//     <>
//      <QueryClientProvider client={myClient}>
       
//        <UserProvider>
//        <CartProvider>
//        <RouterProvider router={router}/>
//        </CartProvider>
//      </UserProvider>

//     <Toaster position="top-right"/>
     
//      </QueryClientProvider>
     
//      <Offline>
//       <div className="p-4 fixed right-8 bottom-8 z-50 rounded-lg  shadow bg-gray-200 text-gray-600 font-semibold">
//       <i className="fa-solid fa-wifi"></i>
//       <span> Check Your Internet Connection</span>
//       </div>
//      </Offline> 
//   </>
//   )
  
// }













import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, useTheme } from './Context/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import UserProvider from './Context/UserContext';
import CartProvider from './Context/Cart.Context';
import { Toaster } from 'react-hot-toast';
import { Offline } from 'react-detect-offline';
import Layout from "./Components/LayOut/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignuP/Signup";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import AuthEmail from "./Pages/Auth/AuthEmail";
import Courses from "./Pages/Courses/Courses";
import ShoppingCart from "./Pages/Cart/Cart";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import InstructorsPage from "./Pages/instructors/instructors";
import VideoPlayer from "./Components/courseVideo/CourseVideo";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Forgetpassword from "./Pages/forgetPass/forgetPassword";
import ConfirmEmail from "./Pages/ConfirmEmail/ConfirmEmail";
import Confirmforgetpass from "./Pages/confirmforgetpass/confirmforgetpass";
import ResetPassword from "./Pages/Reset/ResetPassword";
import Paymentsuccess from './Pages/paymenytSuccess/Paymentsuccess';
import Paymentfailed from './Pages/PaymentFailed/Paymentfailed';

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#333',
    color: '#fff',
  },
};

const ThemeToggle = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

export default function App() {
   const router = createBrowserRouter([
    {path:"/", element:
       <ProtectedRoute>
        <Layout/>
       </ProtectedRoute>, 
       children : [
        {path:"/" , element:<Home/>},
        {path:"/Courses", element:<Courses/>},
        {path:"/cart", element:<ShoppingCart/>},
        {path:"/course/:id", element:<CourseDetails/>},
        {path:"/instructors", element:<InstructorsPage/>},
        {path:"/video", element:<VideoPlayer/>},
        {path:"/checkout", element:<CheckOut/>},  
        {path:"/payment-success", element:<Paymentsuccess/>},
        {path:"/payment-failure", element:<Paymentfailed/>},  
    ],
    },
    
    {path:"/", element : 
    <GuestRoute>
      <Layout/>
    </GuestRoute>
    , children : [
      {path:"/login" , element:<Login/>},
      {path:"/signup" , element:<Signup/>},
      {path:"/authemail", element:<AuthEmail/>},
      {path:"/confirmEmail", element:<ConfirmEmail/>},
      {path:"/forgetpassword", element:<Forgetpassword/>},
      {path:"/Confirmforgetpass", element:<Confirmforgetpass/>},
      {path:"/ResetPassword", element:<ResetPassword/>},
    
   
     
    ],
    },
  ]);

  const myClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={myClient}>
        <UserProvider>
          <CartProvider>
            <ThemeConsumer router={router} />
          </CartProvider>
        </UserProvider>
        <Toaster position="top-right" />
      </QueryClientProvider>
      <Offline>
        <div className="p-4 fixed right-8 bottom-8 z-50 rounded-lg shadow bg-gray-200 text-gray-600 font-semibold">
          <i className="fa-solid fa-wifi"></i>
          <span> Check Your Internet Connection</span>
        </div>
      </Offline>
    </ThemeProvider>
  );
}

// eslint-disable-next-line react/prop-types
const ThemeConsumer = ({ router }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={themes[theme]}>
      <ThemeToggle onClick={toggleTheme}>
        <FaMoon size={24} />
      </ThemeToggle>
      <div style={{ background: themes[theme].background, color: themes[theme].color }}>
        <RouterProvider router={router} />
      </div>
    </StyledThemeProvider>
  );
};