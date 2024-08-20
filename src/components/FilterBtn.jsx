import React from "react";

const FilterBtn = ({ name }) => {
   return (
      <div className=" ml-2 min-w-fit">
         <button
            className="bg-slate-800 rounded-lg  border-gray-600 border-2 h-10 flex items-center justify-center outline-none focus:outline-none focus:ring-0.5 focus:ring-blue-900 focus:border-blue-900 focus:ring-offset-0 px-4 w-full mb-2"
            // w-[25%] sm:w-[10%] md:w-[10%]
         >
            {name}
         </button>
      </div>
   );
};

export default FilterBtn;
