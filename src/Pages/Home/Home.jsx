import { Helmet } from "react-helmet";
import Categoryslider from "../../Components/CategorySlider/Categoryslider";
import CoursesCategories from "../../Components/Courses Categories/Courses Categories";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import Instructors from "../../Components/Instructors/instructors";
import AboutSection from "../About/AboutSection";

 export default function Home() {
    return <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Bright-routes | Home page" />
    </Helmet>
     <HomeSlider/>
     <AboutSection/>
     <CoursesCategories/>
     <Categoryslider/>
     <Instructors/>
    </>
 }