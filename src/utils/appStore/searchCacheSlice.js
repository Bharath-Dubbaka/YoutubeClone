import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
   name: "searchCache",
   initialState: {
      searchStrings: {},
   },
   reducers: {
      cacheResults: (state, action) => {
         state.searchStrings = { ...state.searchStrings, ...action.payload };
      },
   },
});

export const { cacheResults } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
