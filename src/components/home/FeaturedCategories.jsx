import React from "react";
import { Link } from "react-router-dom";
import { Business, individual } from "../../assets/Homedata";
import PropTypes from "prop-types";

const FeaturedCategories = ({ toggleTab }) => {
  return (
    <div>
      <div className="grid w-full max-w-6xl px-5 pb-20 mx-auto ">
        <div className="FlexBox">
          <h1 className="text-sm font-bold uppercase sm:text-base">
            Featured Categories
          </h1>
          <Link>
            <button className="text-sm font-bold sm:text-base">VIEW ALL</button>
          </Link>
        </div>
        <div className="flex flex-col justify-center w-full py-5 sm:flex-row">
          <div className=" sm:w-5/12 border cursor-pointer  hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5 before:z-50">
            <img
              src="/images/blackstar.jpg"
              alt=""
              className="object-cover w-full h-60 sm:h-full"
            />
            <div className="absolute bottom-0 w-full h-full text-white bg-black bg-opacity-25 lef">
              <div className="absolute left-0 right-0 grid place-content-center bottom-7">
                <h4>Money and Finance</h4>
                <span>Income, Personal, Corporate Taxes</span>
              </div>
            </div>
          </div>
          <div
            className={`${
              toggleTab === 1 ? "grid sm:w-11/12 sm:grid-cols-2" : "hidden"
            }`}
          >
            {individual.map((item) => (
              <div
                key={item.id}
                className="grid sm:px-8 px-4 py-14  lg:px-8 border cursor-pointer hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5"
              >
                <h2 className="text-lg font-semibold capitalize sm:text-xl">
                  {item.title}
                </h2>
                <h4 className="text-base sm:text-lg lg:w-72">{item.desc}</h4>
              </div>
            ))}
          </div>
          <div
            className={`${
              toggleTab === 2 ? "grid sm:w-11/12 sm:grid-cols-2" : "hidden"
            }`}
          >
            {Business.map((item) => (
              <div
                key={item.id}
                className="grid sm:px-8 px-4 py-14  lg:px-8 border cursor-pointer hover:shadow-lg relative before:contents() before:h-full before:w-0 before:top-0 before:left-0 before:bg-yellow-400 before:absolute hover:before:w-1.5"
              >
                <h2 className="text-lg font-semibold capitalize sm:text-xl">
                  {item.title}
                </h2>
                <h4 className="text-base sm:text-lg lg:w-72">{item.desc}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedCategories.propTypes = {
  toggleTab: PropTypes.node,
};

export default FeaturedCategories;
