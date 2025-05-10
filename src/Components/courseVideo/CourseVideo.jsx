


export default function VideoPlayer() {
  const queryParams = new URLSearchParams(location.search)
  const videoUrl = queryParams.get("videoUrl")
  const videoname = queryParams.get("videoname")
  console.log(videoname)

 
  return (
    <div className="flex justify-center items-center  min-h-screen  p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        
        {/* Video Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">{videoname}</h1>
         
        </div>
        <div className="relative">
          <video className="w-full rounded-t-lg" controls autoPlay muted>
            <source src={`https://brightminds.runasp.net/api/Video/stream/${videoUrl}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info */}
       
      </div>
    </div>
  );
}