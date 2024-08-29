import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import searchCacheReducer from "./searchCacheSlice";
import chatReducer from "./chatSlice";
import SearchVideoReducer from "../appStore/searchVidSlice";

const store = configureStore({
   reducer: {
      nav: navReducer,
      searchCache: searchCacheReducer,
      chat: chatReducer,
      search: SearchVideoReducer,
   },
});

export default store;
