import React from "react";
import {
   BTN_SEARCH_ICON_URL,
   HAMBURGER_ICON_URL,
   USER_ICON_URL,
   YT_LOGO_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { navigation } from "../utils/appStore/navSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
   const dispatch = useDispatch();
   const handleSidebar = () => {
      dispatch(navigation());
      console.log("Clicked");
   };
   return (
      <>
         <div className="flex justify-between align-middle items-center -mt-4 sm:-mt-2 md:-mt-2 ">
            <div className="flex items-center cursor-pointer">
               <img
                  src={HAMBURGER_ICON_URL}
                  alt="hamburgerMenu"
                  className="pl-4 h-8"
                  onClick={handleSidebar}
               />
               {/* <Link to="/"> */}
                  <img src={YT_LOGO_URL} alt="logoYT" className="h-24 pl-4" />
               {/* </Link> */}
            </div>
            <div className="hidden sm:flex md:flex items-center justify-center text-lg w-[100%] sm:w-[70%] md:w-[70%]">
               <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-[100%] sm:w-[80%] md:w-[80%] justify-center"
               >
                  <input
                     type="text"
                     placeholder="Search"
                     className="rounded-l-full border-gray-600 bg-black border-2 h-10 w-[70%] pl-4  outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 "
                  />
                  <button className=" bg-slate-800 rounded-r-full border-gray-600 border-2 h-10 flex items-center w-[25%] sm:w-[10%] md:w-[10%] justify-center outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 ">
                     <img
                        src={BTN_SEARCH_ICON_URL}
                        alt="searchIcon"
                        className="h-7 "
                     />
                  </button>
               </form>
            </div>
            <div>
               <img src={USER_ICON_URL} alt="userIcon" className="h-9 pr-4" />
            </div>
         </div>
         {/* FOR MOBILE VIEW SEARCH BAR */}
         <div className="flex sm:hidden md:hidden items-center justify-center text-lg w-[100%] sm:w-[70%] md:w-[70%] -mt-4 mb-4">
            <form
               onSubmit={(e) => e.preventDefault()}
               className="flex w-[100%] sm:w-[80%] md:w-[80%] justify-center"
            >
               <input
                  type="text"
                  placeholder="Search"
                  className="rounded-l-full border-gray-600 bg-black border-2 h-10 w-[80%] pl-4  outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 "
               />
               <button className=" bg-slate-800 rounded-r-full border-gray-600 border-2 h-10 flex items-center w-[15%] sm:w-[10%] md:w-[10%] justify-center outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 ">
                  <img
                     src={BTN_SEARCH_ICON_URL}
                     alt="searchIcon"
                     className="h-7 "
                  />
               </button>
            </form>
         </div>
      </>
   );
};

export default Header;
