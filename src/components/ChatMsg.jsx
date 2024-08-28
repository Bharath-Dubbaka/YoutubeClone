import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const ChatMsg = ({ name, message }) => {
   // console.log(name, message, "MFNFN");
   return (
      <div className="flex my-2 items-top">
         <div className="pr-2 ">
            <img
               src={USER_ICON_URL}
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
