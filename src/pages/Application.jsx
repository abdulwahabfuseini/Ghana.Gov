import { Divider } from "@mui/material";
import React from "react";
import Layout from "../layout/Layout";

const Application = () => {
  return (
    <Layout>
      <div className="grid w-full h-full pt-20 pb-80 bg-gray-50">
        <div className="grid w-full h-full max-w-2xl px-5 py-4 mx-auto bg-white sm:py-20 lg:max-w-5xl sm:px-20 lg:px-60 place-items-center">
          <h1 className="py-6 text-2xl sm:text-3xl">
            Check Application Status
          </h1>
          <div className="grid w-full py-8">
            <form action="">
              <div>
                <div className="grid w-full gap-y-4">
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-5 py-4 text-lg border rounded-md bg-gray-50"
                  />
                  <button
                    type="submit"
                    className="w-full py-5 text-lg bg-yellow-400 rounded "
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Application;
