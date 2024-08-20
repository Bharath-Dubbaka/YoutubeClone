import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/appStore/navSlice";
import { YT_VIDEO_ID_DETAILS } from "../utils/constants";

const WatchPage = () => {
   const [urlParam] = useSearchParams();
   const ytKeyURL = urlParam.get("v");
   console.log(urlParam.get("v"));
   const dispatch = useDispatch();
   const [vidDetails, setVidDetails] = useState(null);

   const videoKeyDetails = async (ytKeyURL) => {
      const data = await fetch(
         `${YT_VIDEO_ID_DETAILS}${ytKeyURL}&key=${
            import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
         }`
      );
      const json = await data.json();
      setVidDetails(json.items[0]);
      //   console.log(json, "ID VID DETAILS");
   };
   useEffect(() => {
      dispatch(closeNav());
      videoKeyDetails(ytKeyURL);
   }, []);
   if (!vidDetails) return null;
   console.log(vidDetails);
   return (
      <div className="flex justify-between w-full">
         <div className="mx-8 ml-14 w-[60%]">
            <iframe
               className=" rounded-lg w-full"
               width="876"
               height="493"
               src={
                  "https://www.youtube.com/embed/" +
                  ytKeyURL +
                  "?autoplay=1&mute=0"
               }
               title="BLACK MYTH WUKONG Walkthrough Gameplay Part 2 - BLACK BEAR GUAI BOSS (FULL GAME)"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin"
               allowfullscreen
            ></iframe>
            <div className="mt-4 pl-1 font-semibold text-2xl">
               {vidDetails?.snippet?.title}
            </div>
            <div className="mt-4 pl-1 font-semibold text-2xl">
               {vidDetails?.snippet?.channelTitle}
            </div>
            <div className="mt-4 pl-1 font-semibold text-2xl">
               {vidDetails?.snippet?.description}
            </div>
         </div>
         {/* suggestions tab */}
         <div className="max-w-[35%] min-w-[18%]">
            <div className="p-4">{vidDetails?.snippet?.description}</div>
            <div className="p-4">{vidDetails?.snippet?.description}</div>
            <div className="p-4">{vidDetails?.snippet?.description}</div>
         </div>
      </div>
   );
};

export default WatchPage;
