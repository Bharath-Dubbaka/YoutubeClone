import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainBody = () => {
   return (
      <>
         <Header />

         <div className="flex w-[100%] ">
            <Sidebar />
            <Outlet />
         </div>
      </>
   );
};

export default MainBody;
