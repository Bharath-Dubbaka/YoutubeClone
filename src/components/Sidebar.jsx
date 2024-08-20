import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
   const navStatus = useSelector((store) => store.nav.nav);
   console.log(navStatus);
   return (
      <>
         {navStatus ? (
            <div className="bg-[#0F0F0F] text-white px-4 pb-4 sm:w-[18%] md:w-[15%]">
               <div className="mb-4">
                  {/* <div className="font-extrabold">Subscriptions</div> */}
                  <ul>
                     <li>Home</li>
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
            </div>
         ) : null}
      </>
   );
};

export default Sidebar;
