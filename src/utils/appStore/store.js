import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import searchCacheReducer from "./searchCacheSlice";

const store = configureStore({
   reducer: {
      nav: navReducer,
      searchCache: searchCacheReducer,
   },
});

export default store;
