import { createSlice } from "@reduxjs/toolkit";

const searchVidSlice = createSlice({
   name: "search",
   initialState: {
      searchNav: false,
      searchQuery: null,
   },
   reducers: {
      searchPage: (state, action) => {
         state.searchNav = true;
      },
      searchQuery: (state, action) => {
         state.searchQuery = action.payload;
      },
   },
});

export const { searchPage, searchQuery } = searchVidSlice.actions;
export default searchVidSlice.reducer;
