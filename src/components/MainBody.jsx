import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const MainBody = () => {
   return (
      <div className="flex w-[100%] ">
         <Sidebar />
         <Outlet />
      </div>
   );
};

export default MainBody;
