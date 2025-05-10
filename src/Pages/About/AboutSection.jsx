import Aboutimg from "../../assets/img/about.jpg"
export default function AboutSection() {
  return (
    <div className="grid grid-col-1 gap-6 md:grid-cols-12 my-14">
    <div className="col-span-6">
      <img src={Aboutimg} 
      className="w-full  h-96 "
      alt=" " />
    </div>
    <div className=" col-span-6 space-y-8">
        <div>
        <h3 className=" mx-2  relative text-xl text-primary-500 font-semibold uppercase ">About us</h3>
        <div className="absoulte -mt-2 ml-1 w-16 h-0.5 bg-primary-500 translate-x-28 -top-20 "></div>
        <div className="absoulte -mt-3 ml-1 w-12 h-0.5 bg-primary-500 translate-x-28 -top-20 "></div>
        </div>
        <h1 className="text-3xl mx-2 font-bold">Welcome to Bright-Routes</h1>
        <p className="text-xl ml-2 text-semibold  text-slate-600 px-2 "> Bright-Routes is a flexible and accessible way to acquire knowledge and skills, allowing learners to study anytime.</p>
        <div className=" px-4 flex flex-col gap-2 md:flex-row md:gap-28">
            <div className="space-y-2">
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            Skilled Instructors
            </p>
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            International Certificate
            </p>
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            Online Classes
            </p>
            </div>
            <div className="space-y-2">
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            Online Classes
            </p>
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            Skilled Instructors
            </p>
            <p className=" text-slate-600 cursor-pointer hover:translate-x-3 transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-primary-500 mr-2"></i>
            International Certificate
            </p>
            </div>
        </div>
        <button className="btn mx-2 px-10 py-4 text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300 ">Read more</button>
    </div>
    </div>
  )
}
