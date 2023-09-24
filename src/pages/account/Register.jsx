import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-full py-20 bg-gray-100 sm:py-24">
      <div className="relative grid w-full h-full px-5 py-4 mx-auto bg-white sm:pt-20 sm:max-w-xl sm:px-16 place-items-center">
        <img
          src="/images/favicon.png"
          alt="logo"
          className="absolute h-24 p-4 bg-white rounded-full -top-12"
        />
        <Link to="/apply">
          <button className="absolute text-lg font-semibold top-4 right-5">
            {" "}
            SIGN IN
          </button>
        </Link>
        <div className="w-full py-10 text-center sm:py-4">
          <h1 className="py-5 text-2xl font-semibold text-center ">
            Sign up for an account
          </h1>
          <form action="">
            <div className="grid w-full gap-4 lg:gap-6">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
              />
              <input
                type="text"
                name="otherName"
                id="otherName"
                placeholder="Other Names"
                className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
              />

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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
              />
                <button
                type="submit"
                className="w-full py-5 text-lg bg-yellow-400 rounded"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
      <img
            src="/images/Logo.png"
            alt="logo"
            className="object-contain h-11"
          />
      </div>
       
    </div>
  );
};

export default Register;
