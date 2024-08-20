import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const MainBody = () => {
   return (
      <div className="flex w-[100%] ">
         <Sidebar />
         <MainContainer />
      </div>
   );
};

export default MainBody;
