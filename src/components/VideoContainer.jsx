import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { hocVideo } from "./VideoCard";

const VideoContainer = () => {
   const HighTrendingVideo = hocVideo(VideoCard);
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
            <Link
               key={video.id}
               to={"/watch?v=" + video.id}
               className="no-underline decoration-transparent w-3/4 sm:w-42  md:w-[23%]"
            >
               {video?.statistics?.viewCount > 1900000 ? (
                  //<HocVideo videoDetails={video} />
                  <HighTrendingVideo videoDetails={video} />
               ) : (
                  <VideoCard videoDetails={video} />
               )}
            </Link>
         ))}
      </div>
   );
};

export default VideoContainer;
