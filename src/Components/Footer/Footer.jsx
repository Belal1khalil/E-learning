import imag1 from "../../assets/img/course-1.jpg"
import imag2 from "../../assets/img/course-2.jpg"
import imag3 from "../../assets/img/course-3.jpg"
import imag4 from "../../assets/img/course-2.jpg"
import imag5 from "../../assets/img/course-3.jpg"
import imag6 from "../../assets/img/course-1.jpg"
import { useTheme } from "../../Context/ThemeContext"

export default function Footer() {
  const {theme} = useTheme(); 
    return <>
    <footer className={` py-10 px-4 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-primary-500 text-white' 
    }`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Link */}
        <div>
          <h5 className="text-lg font-bold mb-4">Quick Link</h5>
          <ul className="space-y-2">
            <li className="space-x-1 hover:translate-x-2 hover:transition-[translate] duration-300">
             <i className="fa-solid fa-chevron-right text-sm"></i>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className="space-x-1  hover:translate-x-2 hover:transition-[translate] duration-300">
            <i className="fa-solid fa-chevron-right text-sm"></i>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li className="space-x-1  hover:translate-x-2 hover:transition-[translate] duration-300">
            <i className="fa-solid fa-chevron-right text-sm"></i>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="space-x-1  hover:translate-x-2 hover:transition-[translate] duration-300">
              <i className="fa-solid fa-chevron-right text-sm"></i>
              <a href="#" className="hover:underline">Terms & Condition</a>
            </li>
            <li className="space-x-1 hover:translate-x-2 hover:transition-[translate] duration-300">
              <i className="fa-solid fa-chevron-right text-sm"></i>
              <a href="#" className="hover:underline">FAQs & Help</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-lg font-bold mb-4">Contact</h5>
          <ul className="space-y-2">
            <li>📍 123 Street, New York, USA</li>
            <li>📞 +012 345 67890</li>
            <li>✉️ info@example.com</li>
          </ul>
         
        </div>

        {/* Gallery */}
        <div>
          <h5 className="text-lg font-bold mb-4">Gallery</h5>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={imag1}
              alt="Gallery Image 1"
              className="rounded shadow-sm"
            />
            <img
              src={imag2}
              alt="Gallery Image 2"
              className="rounded shadow-sm"
            />
            <img
              src={imag3}
              alt="Gallery Image 3"
              className="rounded shadow-sm"
            />
            <img
              src={imag4}
              alt="Gallery Image 4"
              className="rounded shadow-sm"
            />
            <img
              src={imag5}
              alt="Gallery Image 5"
              className="rounded shadow-sm"
            />
            <img
              src={imag6}
              alt="Gallery Image 6"
              className="rounded shadow-sm"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-lg font-bold mb-4">Newsletter</h5>
          <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="form-control"
            />
            <button className=" ml-2 btn bg-primary-700 hover:bg-primary-900 transition-colors duration-300">
              Sign Up
            </button>
            
          </div>
          
        </div>
        
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>
          © e-Learning, All Rights Reserved. Designed By <a href="#" className="text-blue-900 hover:underline">Belal khalil</a>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">FAQs</a>
        </div>
      </div>
    </footer>
    </>
 }