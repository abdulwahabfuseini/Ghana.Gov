import { Divider } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Form from "../../pages/account/Form";
import { Link } from "react-router-dom";

const Popup = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const [close, setClose] = useState(true);

  const toggleButton = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      {close && (
        <div
          // onClick={() => setClose(false)}
          className="absolute top-0 left-0 z-50 w-full py-2 pb-24 bg-black bg-opacity-50"
        >
          <div
            className="relative grid w-full h-full px-5 py-20 mx-auto bg-white rounded sm:max-w-2xl sm:pt-20 lg:max-w-4xl sm:place-content-center sm:place-items-center"
          >
            <div>
              <button
                onClick={() => toggleButton(!toggleTab)}
                className="absolute px-4 py-2 border border-black top-8 right-4 rounded-3xl"
              >
                {!toggleTab ? "Signup" : "Login"}
              </button>
              {!toggleTab ? (
                <div className="lg:px-20">
                  <h1 className="py-6 text-2xl text-center">
                    Sign in to your account
                  </h1>
                  <Form />
                </div>
              ) : (
                <div className=" sm:px-14 lg:px-20">
                  <h1 className="py-5 text-2xl text-center">
                    Sign up for an account
                  </h1>
                  <form action="">
                    <div className="grid w-full gap-4 lg:gap-8 sm:grid-cols-2">
                      <div className="grid w-full gap-y-2">
                        <label htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
                        />
                      </div>
                      <div className="grid w-full gap-y-2">
                        <label htmlFor="otherName">
                          Other Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="otherName"
                          id="otherName"
                          placeholder="Other Names"
                          className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
                        />
                      </div>
                      <div className="grid w-full gap-y-2">
                        <label htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
                        />
                      </div>
                      <div>
                        <div className="grid w-full gap-y-2">
                          <label htmlFor="phoneNumber">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex items-center w-full gap-4 px-2.5 py-1 text-lg border rounded-md bg-gray-50">
                            <div className="flex items-center gap-1">
                              <img
                                src="/images/Flag.png"
                                alt="/"
                                className="h-5"
                              />
                              <p>+233</p>
                              <Divider
                                sx={{ height: 35 }}
                                orientation="vertical"
                              />
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
                      <div className="grid w-full gap-y-2">
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
                    </div>
                    <div className="flex items-center w-full gap-4 py-6">
                      <input type="checkbox" className="cursor-pointer " />
                      <h4>
                        Check to agree to{" "}
                        <span className="text-yellow-300">
                          Terms and Conditions
                        </span>{" "}
                        of Ghana.GOV
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-5">
                      <button className="visible w-full text-lg text-gray-400 opacity-0">
                        Already have an acoount?{" "}
                        <Link to="/login">
                          <span className="font-bold text-black hover:underline">
                            Sign In
                          </span>
                        </Link>
                      </button>
                      <button
                        type="submit"
                        className="w-full py-5 text-lg bg-yellow-400 rounded "
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <button
              onClick={() => setClose(false)}
              className="absolute top-6 sm:top-0 sm:-right-9"
            >
              <AiOutlineClose className="p-1 mx-4 bg-yellow-400 w-7 h-7 sm:mx-0" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
