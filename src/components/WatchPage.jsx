import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/appStore/navSlice";
import { YT_VIDEO_ID_DETAILS } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import thumbs_up_icon from "../assets/thumbs_up_icon.png";
import thumbs_down_icon from "../assets/thumbs_down_icon.png";

const WatchPage = () => {
   const [urlParam] = useSearchParams();
   const ytKeyURL = urlParam.get("v");
   // console.log(urlParam.get("v"));
   const dispatch = useDispatch();
   const [vidDetails, setVidDetails] = useState(null);
   console.log(vidDetails, "vidDetailsvidDetailsvidDetails");
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
   // console.log(vidDetails);
   return (
      <div className="flex  justify-evenly w-full overflow-hidden">
         <div className="mx-8 ml-4 w-[62%]">
            <iframe
               className=" rounded-lg  w-[100%]"
               height="493"
               src={
                  "https://www.youtube.com/embed/" +
                  ytKeyURL +
                  "?autoplay=1&mute=0&rel=0"
               }
               title="BLACK MYTH WUKONG Walkthrough Gameplay Part 2 - BLACK BEAR GUAI BOSS (FULL GAME)"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
            ></iframe>
            <div className="mt-4 pl-1 font-semibold text-2xl">
               {vidDetails?.snippet?.title}
            </div>
            <div className="mt-4 pl-1 font-bold text text-xl flex justify-between align-top">
               {vidDetails?.snippet?.channelTitle}
               <div className="flex text-lg cursor-pointer">
                  <div className="px-4 py-1 border border-slate-700 rounded-l-full flex  items-center">
                     <img
                        src={thumbs_up_icon}
                        alt="thumbs_up_icon"
                        className="w-5 h-5 mr-1"
                     />{" "}
                     {vidDetails?.statistics?.likeCount}
                  </div>
                  <div className="px-4 border py-1  border-slate-700 rounded-r-full flex  items-center">
                     <img
                        src={thumbs_down_icon}
                        alt="thumbs_down_icon"
                        className="w-5 h-5 mr-1"
                     />{" "}
                     Dislike
                  </div>
               </div>
            </div>
            {/* <div className="mt-4 pl-1 font-semibold text-2xl">
               {vidDetails?.snippet?.description}
            </div> */}
            <CommentsContainer />
         </div>
         {/* LIVE CHAT/suggestions tab */}
         <div className="w-[32%]">
            <LiveChat />
            {/* <div className="p-4">{vidDetails?.snippet?.description}</div>
            <div className="p-4">{vidDetails?.snippet?.description}</div>
            <div className="p-4">{vidDetails?.snippet?.description}</div> */}
         </div>
      </div>
   );
};

export default WatchPage;
