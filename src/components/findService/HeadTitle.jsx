import React from "react";
import { useLocation } from "react-router-dom";

const HeadTitle = () => {
  const location = useLocation();

  return (
    <div className="relative w-full h-40">
      <img
        src="/images/banner.jpeg"
        alt="banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 bg-black">
        <h1 className="flex items-center justify-start w-full h-full max-w-2xl px-4 mx-auto text-2xl font-bold text-white capitalize lg:max-w-6xl sm:text-3xl">
          {location.pathname.split("/")[1]} Directory
        </h1>
      </div>
    </div>
  );
};

export default HeadTitle;
