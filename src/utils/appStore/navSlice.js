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
      closeNav: (state, action) => {
         state.nav = false;
      },
   },
});

export const { navigation, closeNav } = navSlice.actions;
export default navSlice.reducer;
