import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MinistriesInfo } from "../../assets/Directory";

const FeaturedService = ({ toggleTab }) => {
  return (
    <div className="grid w-full max-w-6xl px-5 pt-40 pb-20 mx-auto sm:py-20 ">
      <div className="w-full bg-white FlexBox">
        <h1 className="text-sm font-bold uppercase md:text-base">
          Featured Services
        </h1>
        <Link to="/search">
          <button className="text-sm font-bold md:text-base hover:underline">VIEW MORE</button>
        </Link>
      </div>
      <div
        className={`${
          toggleTab === 1
            ? "grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-3 pt-5  w-full"
            : "hidden"
        } max-w-7xl `}
      >
        {MinistriesInfo.slice(0, 3).map((item, index) => (
          <Link to={`/ministries/${item?.ministry}`} key={index}>
            <button className="w-full p-5 text-sm font-bold text-left border border-gray-200 shadow-sm md:p-8 md:text-lg  relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5 overflow-hidden before:z-50">
              <h4 className="px-10 sm:px-[1.8vw]">{item?.ministry}</h4>
              <img src="/images/adinkra1.png" alt="" className="absolute top-0 -left-14"/>
            </button>
          </Link>
        ))}
      </div>
      <div
        className={`${
          toggleTab === 2
            ? "grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-3 pt-5  w-full"
            : "hidden"
        }`}
      >
         {MinistriesInfo.slice(3, 6).map((item, index) => (
          <Link to={`/ministries/${item?.ministry}`} key={index}>
            <button className="w-full p-5 text-sm font-bold text-left border border-gray-200 shadow-sm md:p-8 md:text-lg  relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5 overflow-hidden before:z-50">
              <h4 className="px-10 sm:px-[1.8vw]">{item?.ministry}</h4>
              <img src="/images/adinkra1.png" alt="" className="absolute top-0 -left-14"/>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

FeaturedService.propTypes = {
  toggleTab: PropTypes.node,
};

export default FeaturedService;
