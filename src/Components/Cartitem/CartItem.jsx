
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.Context";
import { useTheme } from "../../Context/ThemeContext";
// eslint-disable-next-line react/prop-types
export default function CartItem({courseinfo}) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const {count , price , courseName , imageUrl ,id} = courseinfo;
 const {RemoveCoursefromCart , }= useContext(CartContext)
 const theme = useTheme();
  
 return (
 <>

  
    <div className={`p-4 rounded-lg shadow-md border-2 flex gap-4 ${
          theme === "dark"
            ? "border-gray-700 bg-gray-900 text-white"
            : "border-primary-500 border-opacity-30 bg-white text-black"
        }`}>
      <img src={imageUrl} alt="" className="w-28 h-28 rounded-md object-cover"/>
      <div className="flex flex-grow flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col space-y-2 flex-grow">
          <h2 className="text-lg font-semibold">{courseName}</h2>
          <p className="text-gray-600">By Clinton Bogan</p>
          <span className="text-green-600 font-medium">${price}</span>
        </div>

        {/* Remove Button */}
        <div className="mt-2 md:mt-0 md:self-center">
          <button 
            onClick={() => RemoveCoursefromCart({ id })} 
            className="btn bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
          >
            Remove
          </button>
        </div>
      </div>
    </div>



 
 
 </>
 
  )

}
