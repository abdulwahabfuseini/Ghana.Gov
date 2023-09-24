import { Divider } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleButton = (index) => {
    setToggleTab(index);
  };
  
  return (
    <>
      <div className="grid w-full sm:grid-cols-2">
        <button
          onClick={() => toggleButton(1)}
          className={
            toggleTab === 1
              ? "activeTab py-4 px-8"
              : "tab shadow-md py-4 px-8 text-gray-400"
          }
        >
          Login with Email
        </button>
        <button
          onClick={() => toggleButton(2)}
          className={
            toggleTab === 2
              ? "activeTab py-4 px-8"
              : "tab shadow-md py-4 px-8 text-gray-400"
          }
        >
          Login with Phone Number
        </button>
      </div>
      <div className={`${toggleTab === 1 ? "grid py-8 w-full" : "hidden"}`}>
        <form action="">
          <div className="grid w-full gap-y-2">
            <label htmlFor="email">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
            />
          </div>
          <div className="grid mt-8 gap-y-2">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
            />
          </div>
          <div className="grid w-full gap-2 sm:grid-cols-2 py-7 sm:place-content-start">
            <button className="order-2 w-full py-6 text-lg text-gray-600 sm:text-left sm:order-first sm:py-0">
              Forgot Password?{" "}
              <span className="font-bold text-black">Reset It</span>
            </button>
            <button
              type="submit"
              className="w-full py-5 text-lg bg-yellow-400 rounded "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className={`${toggleTab === 2 ? "grid py-8 w-full" : "hidden"}`}>
        <form action="">
          <div>
            <div className="grid w-full gap-y-2">
              <label htmlFor="phoneNumber">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center w-full gap-4 px-2.5 py-1 text-lg border rounded-md bg-gray-50">
                <div className="flex items-center gap-1">
                  <img src="/images/Flag.png" alt="/" className="h-5" />
                  <p>+233</p>
                  <Divider sx={{ height: 35 }} orientation="vertical" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 bg-transparent"
                />
              </div>
            </div>
          </div>
          <div className="grid mt-8 gap-y-2">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
            />
          </div>
          <div className="grid w-full gap-2 sm:grid-cols-2 py-7 sm:place-content-start">
            <button className="order-2 w-full py-6 text-lg text-gray-600 sm:text-left sm:order-first sm:py-0">
              Forgot Password?{" "}
              <span className="font-bold text-black">Reset It</span>
            </button>
            <button
              type="submit"
              className="w-full py-5 text-lg bg-yellow-400 rounded "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
