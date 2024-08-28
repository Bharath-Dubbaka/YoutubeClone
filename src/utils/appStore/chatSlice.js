import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
   name: "chat",
   initialState: {
      messages: [],
   },
   reducers: {
      addMsg: (state, action) => {
         if (state.messages.length > 30) {
            state.messages.splice(30, 1);
         }
         state.messages.unshift(action.payload);
      },
   },
});

export const { addMsg } = chatSlice.actions;
export default chatSlice.reducer;
