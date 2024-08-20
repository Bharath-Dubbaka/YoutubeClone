import React from "react";

const VideoCard = ({ videoDetails }) => {
//    console.log(videoDetails);
   const handleSelectVideo = () => {
      console.log("clicked ");
   };
   //    if (!videoDetails?.snippet?.thumbnails?.maxres) return null;
   return (
      <div
         className=" mt-4 cursor-pointer "
         onClick={handleSelectVideo}
      >
         {/* <div className="rounded-lg"> */}
         <img
            className="w-full rounded-xl max-h-60 sm:max-h-48 md:max-h-48 object-cover"
            src={
               videoDetails?.snippet?.thumbnails?.maxres?.url ||
               videoDetails?.snippet?.thumbnails?.medium?.url
            }
            alt="thumbnailVideo"
         />
         {/* </div> */}
         <div className="font-bold  line-clamp-2 mt-4 ">
            {videoDetails?.snippet?.title}
         </div>
         <div className="text-slate-400">
            {videoDetails?.snippet?.channelTitle}
         </div>
         <div>
            <span className="  text-slate-400">
               {Math.floor(videoDetails?.statistics?.viewCount / 1000)}K views
            </span>
            {"-"}
            <span></span>
         </div>
      </div>
   );
};

export default VideoCard;
