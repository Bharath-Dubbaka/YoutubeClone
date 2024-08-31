import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchVideoRes = () => {
   const searchNavigation = useSelector((store) => store.search.searchNav);
   const searchQuery = useSelector((store) => store.search.searchQuery);
   const [searchResults, setSearchResults] = useState(null);
   // console.log(navStatus);
   const ytSearchVideoList = async () => {
      try {
         const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=36&q=${searchQuery}&type=video&key=` +
               import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
         );
         const json = await data.json();
         setSearchResults(json.items);
         console.log(json);
      } catch (error) {
         setSearchResults(error);
      }
   };

   useEffect(() => {
      ytSearchVideoList(searchQuery);
   }, [searchQuery]);

   if (!searchNavigation) return null;
   if (!searchResults) {
      return (
         <div className="w-full  h-[100vh] font-bold text-2xl pt-24 flex justify-center">
            Exceeded API limit/quota, please try again after 12:00PM pacific
            time
         </div>
      );
   } else if (searchResults.length === 0) {
      return (
         <div className="w-full  h-[100vh] font-bold text-2xl pt-24 flex justify-center">
            <div>
               Found NO results found with keyword
               <span className=" text-red-700 font-bold pl-2">
                  "{searchQuery}"
               </span>
            </div>
         </div>
      );
   }
   console.log(searchResults, "searchResultssearchResults");
   return (
      <div className="flex-col ">
         {" "}
         <span className="font-bold text-2xl pl-4"> Search Results:</span>
         <div className="flex flex-wrap justify-around mb-8">
            {searchResults &&
               searchResults.map((video) => {
                  {
                     /* return <div key={video.id.videoId}>{video?.snippet?.title}</div>; */
                  }
                  return (
                     <Link
                        key={video.id.videoId}
                        to={"/watch?v=" + video.id.videoId}
                        className="no-underline decoration-transparent w-3/4 sm:w-42  md:w-[23%]"
                     >
                        <VideoCard videoDetails={video} />
                     </Link>
                  );
               })}
         </div>
      </div>
   );
};

export default SearchVideoRes;
