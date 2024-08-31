import React from "react";
import user_avatar from "../assets/user_avatar.png";

const ChatMsg = ({ name, message }) => {
   // console.log(name, message, "MFNFN");
   return (
      <div className="flex my-2 items-top">
         <div className="pr-2 ">
            <img
               src={user_avatar}
               alt="userIcon"
               className="min-w-6 max-w-6"
            />
         </div>
         <div className="pr-2 font-semibold text-red-400">{name}:</div>
         <div className="pr-2">{message}</div>
      </div>
   );
};

export default ChatMsg;
