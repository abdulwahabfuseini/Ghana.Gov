import React from "react";

const Form = () => {
  return (
    <div className="w-full py-4">
      <div className="px-5 py-3 border">
        <h1 className="pb-1.5 font-bold">Leave us a message</h1>
        <h6 className="text-[14px]">
          How can we help? Leave a message below and a service representative
          will follow up with you shortly
        </h6>
        <form action="" className="grid py-3 gap-y-6">
          <input type="text" className='border rounded py-3 px-6 text-lg bg bg-gray-100' placeholder="Title" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            placeholder="Message"
            className="w-full p-2 border rounded outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 text-lg text-white bg-gray-500 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
