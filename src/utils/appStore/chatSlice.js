import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
   name: "chat",
   initialState: {
      messages: [],
   },
   reducers: {
      addMsg: (state, action) => {
         state.messages.push(action.payload);
      },
   },
});


export const {addMsg} = chatSlice.actions
export default chatSlice.reducer