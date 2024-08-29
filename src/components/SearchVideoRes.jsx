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
      const data = await fetch(
         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${searchQuery}&type=video&key=` +
            import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY
      );
      const json = await data.json();
      setSearchResults(json.items);
      console.log(json);
   };

   useEffect(() => {
      ytSearchVideoList(searchQuery);
   }, [searchQuery]);

   if (!searchNavigation) return null;
   console.log(searchResults, "searchResultssearchResults");
   return (
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
   );
};

export default SearchVideoRes;
