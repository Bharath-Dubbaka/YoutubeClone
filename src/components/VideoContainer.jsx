import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
   const [popVideos, setPopVideos] = useState([]);
   const ytPopularVids = async () => {
      const data = await fetch(YOUTUBE_API_URL);
      const json = await data.json();
      //   console.log(json);
      setPopVideos(json.items);
   };

   useEffect(() => {
      ytPopularVids();
   }, []);

   if (popVideos.length <= 0) return null;
   return (
      <div className="bg-[#0F0F0F] text-white flex flex-wrap justify-around mb-8">
         {popVideos.map((video) => (
            <VideoCard key={video.id} videoDetails={video} />
         ))}
      </div>
   );
};

export default VideoContainer;
