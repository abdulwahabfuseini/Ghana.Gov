import React, { useState } from "react";
import Search from "./Search";
import FeaturedService from "./FeaturedService";
import FeaturedCategories from "./FeaturedCategories";

const Banner = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleButton = (index) => {
    setToggleTab(index);
  };
  
  return (
    <div className="w-full h-full">
       <div className="relative h-full sm:h-96 bg-slate-800">
        <img
        src="/images/banner2.png"
        alt="banner"
        className="object-cover w-full h-full md:h-96"
      />
      <div className="absolute top-0 left-0 right-0 h-full px-4 py-6 text-center bg-black sm:py-16 lg:py-24 bg-opacity-30">
        <h1 className="max-w-sm mx-auto text-2xl font-bold text-white sm:text-4xl lg:max-w-2xl">
          Welcome to Ghana's Digital Services and
          Payments Platform
        </h1>
        <div className="col-span-1 pt-5 text-white sm:pt-12 Flex">
          <button
            onClick={() => toggleButton(1)}
            className={toggleTab === 1 ? "activeTab uppercase" : "tab uppercase"}
          >
            individual
          </button>
          <button
            onClick={() => toggleButton(2)}
            className={toggleTab === 2 ? "activeTab uppercase" : "tab uppercase"}
          >
            Bussiness
          </button>
        </div>
        <Search />
      </div>

       </div>
      <FeaturedService toggleTab={toggleTab}/>
      <FeaturedCategories  toggleTab={toggleTab}/>
    </div>
  );
};



export default Banner;
