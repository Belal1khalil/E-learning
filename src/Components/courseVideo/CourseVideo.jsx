import { FaThumbsUp, FaThumbsDown, FaShare, FaBookmark } from "react-icons/fa";

export default function VideoPlayer() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Video Section */}
        <div className="relative">
          <video className="w-full rounded-t-lg" controls autoPlay muted>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-2">Introduction to Web Development</h1>
          <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
            <span>1.2M views • Jan 1, 2024</span>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaThumbsUp className="text-lg" />
                <span>12K</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaThumbsDown className="text-lg" />
                <span>500</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaShare className="text-lg" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaBookmark className="text-lg" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Instructor Info */}
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">
              JD
            </div>
            <div className="ml-3">
              <h2 className="text-white font-semibold">John Doe</h2>
              <p className="text-gray-400 text-sm">1M Subscribers</p>
            </div>
            <button className="ml-auto bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Video Description */}
          <div className="mt-6 bg-gray-700 p-4 rounded-lg text-gray-300">
            <p className="text-sm leading-relaxed">
              Learn the basics of web development, including HTML, CSS, and JavaScript, to build your first website. This course is perfect for beginners who want to dive into the world of coding and create stunning web pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}