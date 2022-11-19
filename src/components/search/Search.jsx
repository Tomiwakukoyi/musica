import React, { useState, useEffect } from "react";
import "./Search.scss";
import axios from "axios";
import { UilSearch } from "@iconscout/react-unicons";

const Search = () => {
  return (
    <div className="container  flex ml-[11%] w-[800px] ">
      <UilSearch style={{ color: "gray" }} />
      <input
        type="search"
        placeholder="Search artists"
        className="search-field  ml-[2%] bg-transparent placeholder:text-gray-500 placeholder:text-md focus:outline-none text-white"
      />
    </div>
  );
};

export default Search;
