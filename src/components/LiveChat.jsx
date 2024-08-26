import React from "react";
import ChatMsg from "./ChatMsg";

const LiveChat = () => {
   return (
      <div className="border border-slate-500 rounded-lg px-2">
         <div className="border-b border-slate-500 my-1 py-2 font-bold">
            Livechat 🟢
         </div>
         <div className="mb-4 h-80 overflow-y-scroll">
            <ChatMsg />
         </div>
      </div>
   );
};

export default LiveChat;
