import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import searchCacheReducer from "./searchCacheSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
   reducer: {
      nav: navReducer,
      searchCache: searchCacheReducer,
      chat: chatReducer,
   },
});

export default store;
