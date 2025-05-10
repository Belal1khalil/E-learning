

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function InstructorCard({itemInfo}) {
    
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {displayName , imageCover , jobTitle , email} = itemInfo
  return <>
   
   <div className="relative  my-4 w-80 mx-auto rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={imageCover}
                    className="w-full h-72 object-cover"
                    alt={displayName}
                />
                
                {/* Full-width overlay for icons (Hidden initially, shown on hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a href="#" className="text-white hover:text-blue-500 transition duration-300">
                        <i className="fa-brands fa-facebook text-2xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                        <i className="fa-brands fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center bg-white">
                <h2 className="font-bold text-2xl text-gray-800 mb-3">{displayName}</h2>
                <p className="text-sm text-gray-600 uppercase tracking-widest mb-4 line-clamp-2">{jobTitle}</p>
                <div className="space-y-3">
                    <p className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">
                        <a href={`mailto:${email}`}>{email}</a>
                    </p>
                    
                </div>
            </div>
        </div>
  </>
    
  
}
