import React, { useEffect, useState } from "react";
import Agency from "./Agency";
import Ministry from "./Ministry";
import Individual from "./Individual";
import Business from "./Business";
import { Select } from "antd";

const Service = () => {
  const [filter, setfilter] = useState("Agency");
  const [loading, setLoading] = useState(false);
  const [content, setCotent] = useState(Agency);

  const handleChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    setLoading(true);
    if (filter === "Agency") {
      setCotent(Agency);
    }

    if (filter === "Ministry") {
      setCotent(Ministry);
    }

    if (filter === "Individual") {
      setCotent(Individual);
    }

    if (filter === "Business") {
      setCotent(Business);
    }
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, [filter]);

  
  return (
    <div className="w-full pb-24 h-ful">
      <div className="p-3 bg-yellow-400 ">
        <div className="w-full max-w-6xl gap-4 mx-auto sm:grid sm:grid-cols-3 place-content-start">
          <div className="hidden col-span-2 gap-2 sm:flex iitems-center">
            <button
              onClick={() => setfilter("Ministry")}
              className={`${
                filter === "Ministry"
                  ? "activeDirectory before:contents() before:-bottom-[13px] before:left-0  before:w-full before:h-1 before:bg-black before:absolute  "
                  : "directory"
              } relative text-lg px-4`}
            >
              Ministry
            </button>
            <button
              onClick={() => setfilter("Agency")}
              className={`${
                filter === "Agency"
                  ? "activeDirectory before:contents() before:-bottom-[13px] before:left-0  before:w-full before:h-1 before:bg-black before:absolute  "
                  : "directory"
              } relative  text-lg px-4`}
            >
              Agency
            </button>
            <button
              onClick={() => setfilter("Individual")}
              className={`${
                filter === "Individual"
                  ? "activeDirectory before:contents() before:-bottom-[13px] before:left-0  before:w-full before:h-1 before:bg-black before:absolute  "
                  : "directory"
              } relative  text-lg px-4`}
            >
              Individual
            </button>
            <button
              onClick={() => setfilter("Business")}
              className={`${
                filter === "Business"
                  ? "activeDirectory before:contents() before:-bottom-[13px] before:left-0  before:w-full before:h-1 before:bg-black before:absolute  "
                  : "directory"
              } relative  text-lg px-4`}
            >
              Business
            </button>
          </div>
          <div className="flex pb-2 sm:hidden">
            <Select
              className="w-full col-span-1 bg-white border-2 rounded-sm focus:border-blue-800"
              defaultValue="Agency"
              style={{ height: 61, fontSize: 25, textAlign: "left" }}
              onChange={handleChange}
              bordered={false}
            >
               <Select.Option value="Agency">
                <button
                  onClick={() => setfilter("Agency")}
                  className="text-lg "
                >
                  Agency
                </button>
              </Select.Option>
              <Select.Option value="Ministry">
                <button
                  onClick={() => setfilter("Ministry")}
                  className="text-lg"
                >
                  Ministry
                </button>
              </Select.Option>
             
              <Select.Option value="Individual">
                <button
                  onClick={() => setfilter("Individual")}
                  className="text-lg"
                >
                  Individual
                </button>
              </Select.Option>
              <Select.Option value="Business">
                <button
                  onClick={() => setfilter("Business")}
                  className="text-lg"
                >
                  Business
                </button>
              </Select.Option>
            </Select>
          </div>
          <div className="w-full py-1 bg-white rounded sm:col-span-1">
            <input
              type="search"
              className="w-full px-4 py-3 bg-transparent border-none rounded outline-none lg:outline"
              placeholder={`Search For ${filter}`}
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl py-10 mx-auto ">
        {loading ? (
          <h1 className="h-screen px-2 text-lg">Please Wait...</h1>
        ) : (
          <div className="px-3">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Service;
