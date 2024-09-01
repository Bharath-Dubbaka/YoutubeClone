import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Shimmer from "./ShimmerUI/Shimmer";

const SearchVideoRes = () => {
   const searchNavigation = useSelector((store) => store.search.searchNav);
   const searchQuery = useSelector((store) => store.search.searchQuery);
   const [searchResults, setSearchResults] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   // console.log(navStatus);
   const ytSearchVideoList = async () => {
      setLoading(true);
      setError(null);
      try {
         const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=36&q=${searchQuery}&type=video&key=` +
               import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
         );
         if (!data.ok) {
            throw new Error(
               "Exceeded API limit/quota, please try again after 12:00PM Pacific time"
            );
         }
         const json = await data.json();
         setSearchResults(json.items);

         if (json.items.length === 0) {
            setError(`No results found for "${searchQuery}"`);
         }
         // console.log(json);
      } catch (error) {
         setError(error.message || "Failed to fetch data");
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      if (searchQuery) {
         ytSearchVideoList(searchQuery);
      }
   }, [searchQuery]);

   if (!searchNavigation) return null;
   if (loading) {
      return (
         <div className="w-full h-[100vh] flex justify-center items-center">
            <Shimmer />
         </div>
      );
   }
   if (error) {
      return (
         <div className="w-full h-[100vh] font-bold text-2xl pt-24 flex justify-center">
            {error}
         </div>
      );
   }
   // console.log(searchResults, "searchResultssearchResults");
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
