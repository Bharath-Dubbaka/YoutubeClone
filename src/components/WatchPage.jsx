import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/appStore/navSlice";
import { YT_VIDEO_ID_DETAILS } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import thumbs_up_icon from "../assets/thumbs_up_icon.png";
import thumbs_down_icon from "../assets/thumbs_down_icon.png";
import ShimmerWatchPage from "./shimmerUI/ShimmerWatchPage";

const WatchPage = () => {
   const [urlParam] = useSearchParams();
   const ytKeyURL = urlParam.get("v");
   const dispatch = useDispatch();
   const [vidDetails, setVidDetails] = useState(null);
   const [channelDetails, setChannelDetails] = useState(null);

   const videoKeyDetails = async (ytKeyURL) => {
      const data = await fetch(
         `${YT_VIDEO_ID_DETAILS}${ytKeyURL}&key=${
            import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
         }`
      );
      const json = await data.json();
      setVidDetails(json.items[0]);
      const chanID = json?.items[0]?.snippet?.channelId;
      // console.log(chanID);
      videoChannelDetails(chanID);
      // const chanDetails = await videoChannelDetails(
      //    vidDetails?.snippet?.channelId
      // );
      // console.log(chanDetails);
      // setChannelDetails(chanDetails);
   };

   const videoChannelDetails = async (channelId) => {
      const data = await fetch(
         `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=` +
            import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
      );
      const json = await data.json();
      setChannelDetails(json.items[0]);
   };
   useEffect(() => {
      dispatch(closeNav());
      videoKeyDetails(ytKeyURL);
   }, []);

   if (!vidDetails) return <ShimmerWatchPage />;
   // console.log(vidDetails);
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
            <div className="my-6 pl-1 font-bold text text-lg flex justify-between align-top">
               <div className="flex items-center">
                  <div>
                     <img
                        src={channelDetails?.snippet?.thumbnails?.default?.url}
                        alt="channel_logo"
                        className="h-12 w-12 rounded-full mr-2"
                     />
                  </div>
                  <div className="">
                     <div>{channelDetails?.snippet?.title}</div>
                     <div className="text-sm text-slate-400">
                        {abbreviate_number(
                           parseInt(
                              channelDetails?.statistics?.subscriberCount,
                              0
                           )
                        )}{" "}
                        subscribers
                     </div>
                  </div>
               </div>
               <div className="flex text-lg cursor-pointer">
                  <div className="px-4 py-1 border border-slate-700 rounded-l-full flex  items-center  bg-slate-900">
                     <img
                        src={thumbs_up_icon}
                        alt="thumbs_up_icon"
                        className="w-5 h-5 mr-1"
                     />{" "}
                     {abbreviate_number(
                        parseInt(vidDetails?.statistics?.likeCount),
                        0
                     )}{" "}
                     Likes
                  </div>
                  <div className="px-4 border py-1  border-slate-700 rounded-r-full flex  items-center  bg-slate-900">
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
