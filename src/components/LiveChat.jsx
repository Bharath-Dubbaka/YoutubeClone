import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/appStore/chatSlice";
import { generateName, generateString } from "../utils/helper";

const LiveChat = () => {
   const [chatMsg, setChatMsg] = useState("");
   const dispatch = useDispatch();
   const msgData = useSelector((store) => store.chat.messages);
   // console.log(msgData)

   useEffect(() => {
      const timer = setInterval(() => {
         // console.log("running");
         dispatch(
            addMsg({
               name: generateName(),
               message: generateString(),
            })
         );
      }, 800);

      return () => {
         clearTimeout(timer);
      };
   }, []);
   return (
      <div className="border border-slate-600 rounded-lg px-2 mr-1 sm:mr-2 md:mr-4 ">
         <div className="border-b border-slate-600 my-1 py-2 font-bold">
            Livechat 🟢
         </div>
         <div className="mb-2 h-[24rem] overflow-y-scroll flex flex-col-reverse">
            {msgData.map((msg) => (
               <ChatMsg name={msg.name} message={msg.message} />
            ))}
         </div>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(
                  addMsg({
                     name: "YOU",
                     message: chatMsg,
                  })
               );
               setChatMsg("");
            }}
            className="w-full pb-4"
         >
            <input
               type="text"
               className="w-[76%] rounded-lg h-8 mr-2 bg-black text-white pl-2 border border-gray-600"
               value={chatMsg}
               onChange={(e) => {
                  setChatMsg(e.target.value);
                  console.log(chatMsg, "chatMsg");
               }}
            />
            <button className="w-[20%] bg-slate-700 rounded-lg h-8">
               Send
            </button>
         </form>
      </div>
   );
};

export default LiveChat;
