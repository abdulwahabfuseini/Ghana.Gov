import React from "react";
import { RefundPolicy } from "../../assets/AboutData";
import Form from "./Form";

const Refund = () => {
  return (
    <>
     <div>
     {RefundPolicy.map((refund, index) => (
        <div key={index}>
          <div>
            <h1 className="text-xl font-bold ">{refund?.title}</h1>
            <h4 className="text-[17px] py-5">{refund?.subTitle}"</h4>
          </div>
          <div>
            {refund.refunds.map((item, index) => (
              <div key={index}>
                <h1 className="text-[17px] py-2">{item.title}</h1>
                <ul className="mx-8 list-disc ">
                  <li className="text-[16.4px] py-1">{item?.step1}</li>
                  <li className="text-[16.4px] py-1">{item?.step2}</li>
                  <li className="text-[16.4px] py-1">{item?.step3}</li>
                  <li className="text-[16.4px] py-1">{item?.step4}</li>
                </ul>
                <div className="py-4">
                  <h1 className="py-2 text-xl font-bold">{item.request}</h1>
                  <ul className="mx-8 list-decimal ">
                    <li className="text-[16.4px] py-1">{item?.contact}</li>
                    <li className="text-[16.4px] py-1">{item?.feedback}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="py-3">
            <h1 className="py-2 text-xl font-bold">{refund.information}</h1>
            <p className="text-[16px] pt-4">{refund?.desc1}</p>
            <p className="text-[16px] pt-4">{refund?.desc2}</p>
          </div>
          <div className="py-3">
            <h1 className="py-2 text-xl font-bold">{refund.payement}</h1>
            <p className="text-[16px] pt-4">{refund?.paydesc1}</p>
            <p className="text-[16px] pt-4">{refund?.paydesc2}</p>
          </div>
          <div className="py-3">
            <h1 className="py-2 text-xl font-bold">{refund.updating}</h1>
            <p className="text-[16px] py-4">{refund?.updatedesc1}</p>
            <p className="text-[16px] pt-8">{refund?.updatedesc2}</p>
          </div>
        </div>
      ))}
     </div>
     <Form /> 
    </>
  );
};

export default Refund;
