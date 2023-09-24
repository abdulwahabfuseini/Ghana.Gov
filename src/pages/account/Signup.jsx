import { Divider } from "@mui/material";
import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Layout>
      <div className="grid w-full sm:px-4 sm:py-20 md:py-52 lg:py-20 bg-gray-50">
        <div className="grid w-full h-full gap-4 sm:mx-auto lg:gap-8 sm:px-0 sm:grid-cols-3 sm:max-w-6xl place-content-start place-items-start">
          <div className="w-full col-span-2 px-4 py-6 bg-white sm:px-8">
            <h1 className="py-5 text-2xl font-bold text-center sm:text-left">
              Sign up for an account
            </h1>
            <div className="flex items-center justify-center pb-14 sm:hidden">
              <div className="relative w-8 h-8 p-3 bg-yellow-400 rounded-full before:contents() before:top-2 before:left-2 before:bg-white before:rounded-full before:absolute before:w-4 before:h-4 " />
              <Divider sx={{ width: 30 }} orientation="horizontal" />
              <div className="relative w-8 h-8 p-3 bg-gray-300 rounded-full" />
            </div>
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
                      <img src="/images/Flag.png" alt="/" className="h-5"/>
                      <p>+233</p>
                      <Divider sx={{ height: 35}} orientation="vertical" />
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
              <input type="checkbox" className="cursor-pointer "/>
                <h4>
                  Check to agree to{" "}
                  <span className="text-yellow-300">Terms and Conditions</span>{" "}
                  of Ghana.GOV
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-2 py-5">
                <button className="w-full text-lg text-gray-400">
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
          <div className="hidden w-full h-full col-span-1 py-8 bg-white sm:grid place-items-center place-content-center">
            <div className="flex items-center">
              <div className="relative w-8 h-8 p-3 bg-yellow-400 rounded-full before:contents() before:top-2 before:left-2 before:bg-white before:rounded-full before:absolute before:w-4 before:h-4 " />
              <Divider sx={{ width: 30 }} orientation="horizontal" />
              <div className="relative w-8 h-8 p-3 bg-gray-300 rounded-full" />
            </div>
            <div className="grid py-16 text-center lg:py-32 place-items-center">
              <img src="/images/contact.svg" alt="" className="w-24" />
              <h1 className="py-6 text-xl font-bold">Perssonal Details</h1>
              <p className="px-10 text-lg">
                Let’s get to know you. Kindly fill in your name and the other
                required details to create your account.
              </p>
            </div>
            <p className="py-3 text-lg text-gray-400">
              Need help?{" "}
              <span className="text-black hover:underline">
                Contact Support
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
