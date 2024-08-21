import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
   const navStatus = useSelector((store) => store.nav.nav);
   // console.log(navStatus);

   if (!navStatus) return null;
   return (
      <div className="bg-[#0F0F0F] text-white px-4 pb-4 sm:w-[18%] md:w-[15%]">
         <div className="mb-4">
            {/* <div className="font-extrabold">Subscriptions</div> */}
            <ul>
               <Link to="/">
                  <li>Home</li>
               </Link>
               <li>Shorts</li>
               <li>Videos</li>
               <li>Saved</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">Watch Later</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">Trending</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">Explore</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">Subscriptions</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">Near you</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
         <div className="mb-4">
            <div className="font-extrabold">View More</div>
            <ul>
               <li>Music</li>
               <li>Movies</li>
               <li>Sports</li>
               <li>Gaming</li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
