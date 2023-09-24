import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import TermsCondition from "./TermsCondition";
import Privacy from "./Privacy";
import Support from "./Support";
import Refund from "./Refund";
import { Link } from "react-router-dom";
import { Select } from "antd";

const GhanaGov = () => {
  const [filter, setfilter] = useState("Overview");
  const [loading, setLoading] = useState(false);
  const [content, setCotent] = useState(Overview);
  const [sticky, setSticky] = useState(false);

  const handleChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });

    setLoading(true);
    if (filter === "Overview") {
      setCotent(Overview);
    }

    if (filter === "Terms and Condition") {
      setCotent(TermsCondition);
    }

    if (filter === "Privacy Policy") {
      setCotent(Privacy);
    }

    if (filter === "Help & Support") {
      setCotent(Support);
    }

    if (filter === "Refund Policy") {
      setCotent(Refund);
    }
    setLoading(false);
  }, [filter]);

  return (
    <div className="grid w-full h-full max-w-2xl gap-8 px-4 py-6 mx-auto sm:py-24 sm:grid-cols-3 sm:max-w-6xl place-content-start">
      <div
        className={`${
          sticky && "top-6 col-span-1 fixed sm:w-52 lg:w-[23vw] "
        } col-span-1 hidden sm:block`}
      >
        <h1 className="pb-3 text-xl font-bold border-b-4 border-gray-200">
          ABOUT GHANA.GOV
        </h1>
        <div className="grid py-6 place-content-start place-items-start gap-y-6">
          <button
            onClick={() => setfilter("Overview")}
            className={`${
              filter === "Overview" ? "activeBtn border-l-0 px-0" : "btn"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setfilter("Terms and Condition")}
            className={`${
              filter === "Terms and Condition" ? "activeBtn" : "btn"
            }`}
          >
            Terms and Conditions
          </button>
          <button
            onClick={() => setfilter("Privacy Policy")}
            className={`${filter === "Privacy Policy" ? "activeBtn" : "btn"}`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setfilter("Help & Support")}
            className={`${filter === "Help & Support" ? "activeBtn" : "btn"}`}
          >
            Help & Support
          </button>
          <button
            onClick={() => setfilter("Refund Policy")}
            className={`${filter === "Refund Policy" ? "activeBtn" : "btn"}`}
          >
            Refund Policy
          </button>
        </div>
      </div>
      <div className="grid col-span-2 sm:hidden">
        <Select
          className="w-full col-span-1 bg-white border-2 rounded-sm focus:border-blue-800"
          defaultValue="Overview"
          style={{ height: 61, fontSize: 25, textAlign: "left" }}
         
          onChange={handleChange}
          bordered={false}
        >
          <Select.Option value="Overview">
            <button onClick={() => setfilter("Overview")} className="text-lg">Overview</button>
          </Select.Option>
          <Select.Option className="" value="Terms and Condition">
          <button
            onClick={() => setfilter("Terms and Condition")}
            className="text-lg"
          >
            Terms and Condition
          </button>
          </Select.Option>
          <Select.Option value="Privacy Policy">
            <button onClick={() => setfilter("Privacy Policy")}  className="text-lg">
              Privacy Policy
            </button>
          </Select.Option>
          <Select.Option value=" Help & Support">
            <button onClick={() => setfilter("Help & Support")} className="text-lg">
              Help & Support
            </button>
          </Select.Option>
          <Select.Option value="Refund Policy">
            <button onClick={() => setfilter("Refund Policy")} className="text-lg ">
              Refund Policy
            </button>
          </Select.Option>
        </Select>
      </div>
      <div
        className={`${
          sticky && " sm:left-[32vw] lg:left-[26vw] -top-6 relative"
        } w-full col-span-2`}
      >
        <header className="hidden py-2 space-x-4 text-base text-gray-500 uppercase border-b-4 border-gray-200 sm:block">
          <Link to="/">
            <span>home </span>
          </Link>
          <span> /</span>
          <span>about ghana.gov</span>
          <span> / </span>
          <span className="text-black">{filter}</span>
        </header>
        <div className="sm:py-7">{!loading && content}</div>
      </div>
    </div>
  );
};

export default GhanaGov;
