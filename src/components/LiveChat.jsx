import React, { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/appStore/chatSlice";

const LiveChat = () => {
   const dispatch = useDispatch();
   const msgData = useSelector((store) => store.chat.messages);
   // console.log(msgData)

   useEffect(() => {
      const timer = setInterval(() => {
         console.log("running");
         dispatch(
            addMsg({
               name: "Brat",
               message: "Welcome my King, kingdomCome" + new Date(),
            })
         );
      }, 2000);

      return () => {
         clearTimeout(timer);
      };
   }, []);
   return (
      <div className="border border-slate-500 rounded-lg px-2 mr-1 sm:mr-2 md:mr-4 ">
         <div className="border-b border-slate-500 my-1 py-2 font-bold">
            Livechat 🟢
         </div>
         <div className="mb-4 h-80 overflow-y-scroll">
            {msgData.map((msg) => (
               <ChatMsg name={msg.name} message={msg.message} />
            ))}
         </div>
      </div>
   );
};

export default LiveChat;
