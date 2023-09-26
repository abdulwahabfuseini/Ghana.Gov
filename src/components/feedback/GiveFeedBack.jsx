// import { Divider } from "@mui/material";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Popup from "./Popup";
import { Upload } from "antd";

const GiveFeedBack = () => {
  return (
    <div className="grid w-full h-full sm:px-4 sm:py-20 md:pt-32 md:pb-60 lg:py-6 lg:pb-20 bg-gray-50">
      <Popup />
      <div className="w-full h-full max-w-2xl px-5 py-4 mx-auto sm:pt-20 sm:max-w-6xl">
        <h1 className="py-2">NEW FEEDBACK</h1>
        <div className="relative grid w-full py-4 bg-white place-items-center place-content-center">
            <button className="absolute top-6 left-2"><FaArrowLeft /></button>
          <div className="py-2">gdgdgdgdgd</div>
          <h3 className="pt-3 pb-9">Enter details</h3>
         <textarea name="description" id="description" cols="30" rows="5" placeholder="Please enter description" className="w-full p-4 border"></textarea>  
         <div className="py-5">
           <h4>Add photos/videos <span className="text-gray-400 ">(Optional)</span></h4>
           <div className="relative grid grid-cols-2 gap-6 py-3 sm:grid-cols-4">
              <span className="h-24 border w-28">
                <Upload />
              </span>
              <span className="h-24 border w-28">ffsfs</span>
              <span className="h-24 border w-28">ffsfs</span>
              <span className="h-24 border w-28">ffsfs</span>
           </div>
           <button className="w-full py-3 mt-5 bg-yellow-400">Next</button>
        </div>          
        </div>
      </div>
    </div>
  );
};

export default GiveFeedBack;
