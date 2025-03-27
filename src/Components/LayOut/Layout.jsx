import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
    return <>
      <Navbar/>
       <div className=" container  min-h-[75vh] pt-20 pb-10">
       <Outlet>
      </Outlet>
       </div>
      <Footer/>
    </>
}