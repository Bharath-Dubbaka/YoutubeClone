import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
   const navStatus = useSelector((store) => store.nav.nav);
   // console.log(navStatus);

   if (!navStatus) return null;
   return (
      <div className="bg-[#0F0F0F] text-white px-4 pb-4 sm:w-[18%] md:w-[15%]">
         <div className="mb-2 pb-2 border-b border-slate-700">
            {/* <div className="font-extrabold">Subscriptions</div> */}
            <ul className="px-2 pb-2">
               <Link to="/">
                  <li className="pl-2 pb-0.5 hover:bg-slate-700 rounded-lg cursor-pointer">
                     Home
                  </li>
               </Link>
               <li className="pl-2 hover:bg-slate-700 rounded-lg pb-0.5 cursor-pointer">
                  Shorts
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Videos
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Saved
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2 border-b border-slate-700">
            <div className="font-extrabold">Watch later</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Music
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Movies
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Sports
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Gaming
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2 border-b border-slate-700">
            <div className="font-extrabold">Trending</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Music
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Movies
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Sports
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Gaming
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2">
            <div className="font-extrabold">Subscriptions</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Music
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Movies
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                  Sports
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg  cursor-pointer">
                  Gaming
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
