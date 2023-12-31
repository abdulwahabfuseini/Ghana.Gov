import { Divider } from "@mui/material";
import { Select } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="absolute left-0 right-0 w-full px-5 sm:-bottom-7 -bottom-24">
      <form className="grid sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto sm:bg-white sm:shadow-xl backdrop:none sm:w-[79vw] lg:w-[67vw] gap-y-2">
        <Select
        className="w-full h-20 bg-white shadow-md sm:col-span-1 sm:shadow-sm"
         defaultValue="Search for Gov't Agencies"
         style={{ height: 61, fontSize: 25, textAlign: "left" }}
         onChange={handleChange}
         bordered={false}
        >
          <Select.Option value="Search for Gov't Agencies">
            <button className="text-lg">Search for Gov't Agencies</button>
          </Select.Option>
          <Select.Option value="Search in Ministries">
            <button className="text-lg">Search in Ministries</button>
          </Select.Option>
        </Select>

        <div className="flex shadow-md sm:shadow-none sm:col-span-1 lg:col-span-3 items-cemter">
          <Divider
            sx={{ height: 60, mr: 2 }}
            orientation="vertical"
            className="hidden sm:block"
          />
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-full px-2 text-lg outline-none sm:px-0"
          />
          <button className="px-6 py-2 bg-yellow-400 lg:px-10">
            <FaSearch className="w-5 h-10" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
