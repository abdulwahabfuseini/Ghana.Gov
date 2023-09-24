import React from "react";
import { TermsConditions } from "../../assets/AboutData";
import Form from "./Form";

const TermsCondition = () => {
  return (
    <>
     <div>
     {TermsConditions.map((term, index) => (
        <div key={index}>
          <div>
            <h1 className="text-xl font-bold ">{term?.title}</h1>
            <p className="text-[17px] py-2">{term?.termDesc1}"</p>
            <p className="text-[16.8px] py-5">{term?.termDesc2}</p>
            <p className="text-[16px] pt-4">{term?.VisionDesc3}</p>
          </div>
          <div>
            <h1 className="text-xl font-bold ">{term?.respo}</h1>
            <p className="text-[17px] py-2">{term?.resDesc}</p>
          </div>
          <div className="py-4">
            <h1 className="text-xl font-bold ">{term?.payment}</h1>
            <p className="text-[17px] py-2">{term?.payDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.privacy}</h1>
            <p className="text-[16.8px]  py-2">{term?.privDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.restriction}</h1>
            <p className="text-[16.8px]  py-2">{term?.resDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.restricted}</h1>
            <p className="text-[16.8px]  py-2">{term?.restriDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.website}</h1>
            <p className="text-[16.8px]  py-2">{term?.webDesc1}</p>
            <p className="text-[16.8px]  py-2">{term?.webDesc2}</p>
            <p className="text-[16.8px]  py-2">{term?.webDesc3}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.property}</h1>
            <p className="text-[16.8px]  py-2">{term?.propertyDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.avalability}</h1>
            <p className="text-[16.8px]  py-2">{term?.avalDesc}"</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.option}</h1>
            <p className="text-[16.8px]  py-2">{term?.optDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.notification}</h1>
            <p className="text-[16.8px]  py-2">{term?.notDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.errors}</h1>
            <p className="text-[16.8px]  py-2">{term?.errordesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.warrant}</h1>
            <p className="text-[16.8px]  py-2">{term?.waDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.liability}</h1>
            <p className="text-[16.8px]  py-2">{term?.liaDesc1}</p>
            <p className="text-[16.8px]  py-2">{term?.liaDesc2}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.termination}</h1>
            <p className="text-[16.8px]  py-2">{term?.term1}</p>
            <p className="text-[16.8px]  py-2">{term?.term2}</p>
            <p className="text-[16.8px]  py-2">{term?.term3}</p>
            <p className="text-[16.8px]  py-2">{term?.term4}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.governTitle}</h1>
            <p className="text-[16.8px]  py-2 text-center">{term?.governSubTitle}</p>
            <p className="text-[16.8px]  py-2">{term?.governDesc1}</p>
            <p className="text-[16.8px]  py-2">{term?.governDesc2}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.agreement}</h1>
            <p className="text-[16.8px]  py-2">{term?.agreeDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.severability}</h1>
            <p className="text-[16.8px]  py-2">{term?.serDesc1}</p>
            <p className="text-[16.8px]  py-2">{term?.serDesc2}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.waiver}</h1>
            <p className="text-[16.8px]  py-2">{term?.waivDesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.updating}</h1>
            <p className="text-[16.8px]  py-2">{term?.updesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.commun}</h1>
            <p className="text-[16.8px]  py-2">{term?.commundesc}</p>
          </div>
          <div className="py-3">
            <h1 className="text-xl font-bold ">{term?.contact}</h1>
            <p className="text-[16.8px]  py-2">{term?.direct}</p>
            <div>
              {
                term.contactInfo.map((item, index) => (
                  <ul key={index} className="list-disc mx-7">
                    <li className="text-[16.4px]  py-2"><a href="tel:0307000575">{item.tel}</a></li>
                    <li className="text-[16.4px]  py-2"><a href="mailto:help@ghana.gov.gh">{item.mail}</a></li>
                    <li className="text-[16.4px]  py-2"><a href="">{item.website}</a></li>
                  </ul>
                ))
              }
            </div>
          </div>
        </div>
      ))}
     </div>
     <Form />
    </>
  );
};

export default TermsCondition;
