import React from "react";
import VideoContainer from "./VideoContainer";
import FilterList from "./FilterList";
const MainContainer = () => {
   return (
      <div className="bg-[#0F0F0F] text-white sm:min-w-[82%] sm:max-w-[100%] md:min-w-[85%] md:max-w-[100%] overflow-auto">
         <FilterList />
         <VideoContainer />
      </div>
   );
};

export default MainContainer;
