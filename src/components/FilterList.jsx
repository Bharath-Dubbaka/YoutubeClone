import React from "react";
import FilterBtn from "./FilterBtn";

const FilterList = () => {
   const filterOptions = [
      "All",
      "Music",
      "Fun",
      "Games",
      "Sci-fi",
      "Science",
      "Tech",
      "Comedy",
      "Action",
      "Triller",
      "Market",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "HTML",
      "Tailwind",
      "Toast",
      "Redux-ToolKit",
      "API",
      "JSON",
   ];
   return (
      <div className="bg-[#0F0F0F] text-white flex overflow-x-scroll w-[100%]">
         {filterOptions.map((options, index) => (
            <FilterBtn key={index} name={options} />
         ))}
      </div>
   );
};

export default FilterList;
