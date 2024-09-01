import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home_icon from "../assets/home_icon.png";
import reel_icon from "../assets/reel_icon.png";
import subscription_icon from "../assets/subscription_icon.png";
import video_icon from "../assets/video_icon.png";
import gaming_icon from "../assets/gaming_icon.png";
import sports_icon from "../assets/sports_icon.png";
import movie_icon from "../assets/movie_icon.png";
import music_icon from "../assets/music_icon.png";
import thumbs_up_icon from "../assets/thumbs_up_icon.png";

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
                  <li className="pl-1 pb-0.5 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full py-1">
                     <div className="w-[30%] flex justify-center">
                        <img src={home_icon} alt="home_icon" className="w-6" />{" "}
                     </div>
                     Home
                  </li>
               </Link>
               <li className="pl-1 hover:bg-slate-700 rounded-lg pb-0.5 cursor-pointer flex items-center w-full py-1">
                  <div className="w-[30%] flex  justify-center">
                     <img src={reel_icon} alt="reel_icon" className="w-4" />{" "}
                  </div>
                  Shorts
               </li>
               <li className="pb-0.5 pl-1 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img
                        src={video_icon}
                        alt="home_icon"
                        className="w-4 h-6"
                     />{" "}
                  </div>
                  Videos
               </li>
               <li className="pl-1 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img
                        src={subscription_icon}
                        alt="home_icon"
                        className="w-5"
                     />
                  </div>
                  Saved
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2 border-b border-slate-700">
            <div className="font-extrabold">Watch later</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={music_icon} alt="music_icon" className="w-6" />{" "}
                  </div>
                  Music
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={movie_icon} alt="movie_icon" className="w-4" />{" "}
                  </div>
                  Movies
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={sports_icon} alt="sports_icon" className="w-4" />{" "}
                  </div>
                  Sports
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={gaming_icon} alt="gaming_icon" className="w-6" />{" "}
                  </div>
                  Games
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2 border-b border-slate-700">
            <div className="font-extrabold">Trending</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={music_icon} alt="music_icon" className="w-6" />{" "}
                  </div>
                  Music
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={movie_icon} alt="movie_icon" className="w-4" />{" "}
                  </div>
                  Movies
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={sports_icon} alt="sports_icon" className="w-4" />{" "}
                  </div>
                  Sports
               </li>
               <li className="pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={gaming_icon} alt="gaming_icon" className="w-6" />{" "}
                  </div>
                  Games
               </li>
            </ul>
         </div>
         <div className="mb-2 pb-2">
            <div className="font-extrabold">Subscriptions</div>
            <ul className="p-2">
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img src={movie_icon} alt="movie_icon" className="w-4" />{" "}
                  </div>
                  For you
               </li>
               <li className="pb-0.5 pl-2 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center w-full  py-1">
                  <div className="w-[30%] flex justify-center">
                     <img
                        src={thumbs_up_icon}
                        alt="sports_icon"
                        className="w-4"
                     />{" "}
                  </div>
                  Liked
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
