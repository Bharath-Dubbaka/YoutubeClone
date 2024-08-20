import React, { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";

const VideoContainer = () => {
   const ytPopularVids = async () => {
      const data = await fetch(YOUTUBE_API_URL);
      const json = await data.json();
      console.log(json);
   };

   useEffect(() => {
      ytPopularVids();
   }, []);
   return <div className="bg-[#0F0F0F] text-white">VideoContainer</div>;
};

export default VideoContainer;
