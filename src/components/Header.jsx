import React, { useEffect, useState, useRef } from "react";
import { AUTO_SUGGEST_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { navigation } from "../utils/appStore/navSlice";
import { cacheResults } from "../utils/appStore/searchCacheSlice";
import { searchPage, searchQuery } from "../utils/appStore/searchVidSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import hamburger_icon from "../assets/hamburger_icon.png";
import search_icon from "../assets/search_icon.png";
import user_avatar from "../assets/user_avatar.png";
import logo_icon from "../assets/logo_icon.png";

const Header = () => {
   const [searchText, setSearchText] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const cache = useSelector((store) => store.searchCache.searchStrings);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const inputRef = useRef(null);
   const handleSidebar = () => {
      dispatch(navigation());
      console.log("Clicked");
   };
   // debouncing
   useEffect(() => {
      // console.log(searchText, "searchTextSearchText");
      const debouncingTimer = setTimeout(() => {
         if (cache[searchText]) {
            setSuggestions(cache[searchText]);
         } else {
            autoSuggestCall();
         }
      }, 300);
      return () => {
         clearTimeout(debouncingTimer);
      };
   }, [searchText]);

   const autoSuggestCall = async () => {
      const data = await fetch(AUTO_SUGGEST_API_URL + searchText);
      const json = await data.json();
      setSuggestions(json[1]);
      // console.log(json, "SUGGESTIONS FROM API");
      dispatch(
         cacheResults({
            [searchText]: json[1],
         })
      );
   };

   const searchQueryYT = (e) => {
      e.preventDefault();
      dispatch(searchPage());
      dispatch(searchQuery(searchText));
      navigate("/query");
      setShowSuggestions(false);
      if (inputRef.current) {
         inputRef.current.blur();
      }
      // setSearchText(e.target.innerText);
      // console.log(searchText, "searchTextsearchText");
   };
   return (
      <>
         <div className="flex justify-between align-middle items-center -mt-4 sm:-mt-2 md:-mt-2 ">
            <div className="flex items-center cursor-pointer">
               <img
                  src={hamburger_icon}
                  alt="hamburgerMenu"
                  className="pl-4 h-8"
                  onClick={handleSidebar}
               />
               {/* <Link to="/"> */}
               <Link to="/">
                  <img src={logo_icon} alt="logoYT" className="h-24 pl-4" />
               </Link>
               {/* </Link> */}
            </div>
            <div className="hidden sm:flex md:flex items-center justify-center  align-middle text-lg w-[35rem]">
               <div className="w-full ">
                  <form
                     onSubmit={(e) => searchQueryYT(e)}
                     className="flex w-full"
                  >
                     <input
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                           setTimeout(() => {
                              setShowSuggestions(false);
                           }, 400);
                        }}
                        ref={inputRef}
                        className="rounded-l-full border-gray-600 bg-black border-2 h-10 w-[88%] pl-4  outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 "
                     />
                     <button className=" bg-slate-800 rounded-r-full border-gray-600 border-2 h-10 flex items-center w-[10%]  justify-center outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 p-0 ">
                        <img
                           src={search_icon}
                           alt="searchIcon"
                           className="h-7 "
                        />
                     </button>
                  </form>
                  {showSuggestions && (
                     <div className=" absolute rounded-lg bg-[#272727] w-[31rem] z-10">
                        {suggestions.map((suggest) => (
                           <div
                              className="py-1 pl-4 bg-[#272727] hover:text-gray-400 hover:bg-black flex  items-center rounded-lg"
                              key={suggest}
                              onClick={(e) => {
                                 console.log(e.target.innerText);
                                 dispatch(searchPage());
                                 dispatch(searchQuery(e.target.innerText));
                                 navigate("/query");
                                 setSearchText(e.target.innerText);
                                 setShowSuggestions(false);
                              }}
                           >
                              <span className="pr-2">
                                 <img
                                    src={search_icon}
                                    alt="searchIcon"
                                    className="h-5 "
                                 />
                              </span>
                              {suggest}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
            <div>
               <img src={user_avatar} alt="userIcon" className="h-9 pr-4" />
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
                  <img src={search_icon} alt="searchIcon" className="h-7 " />
               </button>
            </form>
         </div>
      </>
   );
};

export default Header;
