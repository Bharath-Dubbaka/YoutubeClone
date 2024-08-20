import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
   name: "nav",
   initialState: {
      nav: true,
   },
   reducers: {
      navigation: (state, action) => {
         state.nav = !state.nav;
      },
   },
});

export const { navigation } = navSlice.actions;
export default navSlice.reducer;
