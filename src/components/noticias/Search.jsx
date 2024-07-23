import React from "react";
import {BsSearch } from "react-icons/bs";

const Search = () => {
  return (
      <div className="flex flex-row justify-center items-center bg-purple-500 py-1 px-3 rounded-3xl">
        <BsSearch className="mr-2" />
        <input type="text" className="w-14 bg-transparent outline-none" />
      </div>
    
  );
};

export default Search;
