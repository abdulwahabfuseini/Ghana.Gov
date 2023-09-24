import React from "react";
import { Link, useParams } from "react-router-dom";
import { MinistriesInfo } from "../assets/Directory";
import Layout from "../layout/Layout";

const Ministries = () => {
  const { id } = useParams();

  const ministries = MinistriesInfo.find(
    (ministries) => ministries.ministry === id
  );

  return (
    <Layout>
      <div className="relative w-full h-40">
        <img
          src="/images/banner.jpeg"
          alt="banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30">
          <h1 className="flex items-center justify-start w-full h-full max-w-2xl px-4 mx-auto text-2xl font-bold text-white capitalize lg:max-w-6xl sm:text-3xl">
            {ministries?.ministry}
          </h1>
        </div>
      </div>
      <div className="grid w-full h-full max-w-2xl gap-8 px-4 py-24 mx-auto sm:grid-cols-3 sm:max-w-6xl place-content-start">
        <div className="hidden col-span-1 sm:block">
          <h1 className="pb-3 text-xl font-bold border-b-4 border-gray-200">
            {ministries?.ministry}
          </h1>
          <div className="grid py-6 place-content-start place-items-start gap-y-6">
            <img
              src={`/images/ministriesLogo/${ministries?.logo}`}
              alt="logo"
              className="object-contain h-20"
            />
            <div className="grid gap-2">
              <button className="text-lg">Overview</button>
              <button className="text-lg">Agencies</button>
            </div>
            <div className="py-12">
              <h1 className="py-1 text-lg font-semibold">Office</h1>
              <h1 className="text-gray-600">{ministries?.office}</h1>
              <div className="py-5">
                <h1 className="text-lg font-semibold ">Operating Hours</h1>
                {ministries.operatingHours.map((working, index) => (
                  <div key={index}>
                    <p className="py-1 text-gray-600">{working?.day}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="font-semibold">Mailing Address</h1>
                <p className="text-gray-600">{ministries?.mailing}</p>
              </div>
              <div className="py-4">
                <h1 className="font-semibold">Digital Address</h1>
                <p className="text-gray-600">{ministries?.digital}</p>
              </div>
              <div>
                <h1 className="font-semibold">Website</h1>
                <a className="text-blue-500" href={ministries?.website}>
                  {ministries?.website}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <header className="hidden py-2 space-x-4 text-base text-gray-500 uppercase border-b-4 border-gray-200 sm:block">
            <Link to="/">
              <span>home </span>
            </Link>
            <span> /</span>
            <span>Minstries</span>
            <span> / </span>
            <span className="text-black"> {ministries?.ministry}</span>
          </header>
          <div className="py-7"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Ministries;
