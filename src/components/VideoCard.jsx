import React from "react";

const VideoCard = ({ videoDetails }) => {
   //    console.log(videoDetails);
   const handleSelectVideo = () => {
      console.log("clicked ");
   };

   const abbreviate_number = (num, fixed) => {
      if (num === null) {
         return null;
      } // terminate early
      if (num === 0) {
         return "0";
      } // terminate early
      fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
      var b = num.toPrecision(2).split("e"), // get power
         k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
         c =
            k < 1
               ? num.toFixed(0 + fixed)
               : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
         d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
         e = d + ["", "K", "M", "B", "T"][k]; // append power
      return e;
   };
   //    if (!videoDetails?.snippet?.thumbnails?.maxres) return null;
   return (
      <div className=" mt-4 cursor-pointer  " onClick={handleSelectVideo}>
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
               {/* {Math.floor(videoDetails?.statistics?.viewCount / 1000)}K views */}
               {videoDetails?.statistics?.viewCount
                  ? abbreviate_number(
                       parseInt(videoDetails?.statistics?.viewCount),
                       0
                    ) + "Views"
                  : null}
            </span>
            <span></span>
         </div>
      </div>
   );
};

export default VideoCard;

export const hocVideo = (VideoCard) => {
   return (props) => {
      return (
         <div className=" -mt-6">
            <div className="relative top-7 right-2 font-bold">🔥</div>
            <VideoCard {...props} />
         </div>
      );
   };
};

// export const HocVideo = ({ videoDetails }) => {
//    return (
//       <div className=" -mt-6">
//          <div className="relative top-7 right-2 font-bold">🔥</div>
//          <VideoCard videoDetails={videoDetails} />
//       </div>
//    );
// };
