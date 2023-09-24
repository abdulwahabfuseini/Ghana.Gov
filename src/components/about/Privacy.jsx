import React from "react";
import { PrivacyPolicy } from "../../assets/AboutData";
import Form from "./Form";

const Privacy = () => {
  return (
    <>
     <div>
     {PrivacyPolicy.map((privacy, index) => (
        <div key={index}>
          <div>
            <h1 className="text-xl font-bold ">{privacy?.title}</h1>
            <p className="text-[17px] py-5">{privacy?.subTitle}</p>
          </div>
          <div>
            <h1 className="text-xl font-bold ">{privacy?.sub1}</h1>
            <p className="text-[17px] py-2">{privacy?.guide}</p>
            <div className="py-4">
              {privacy.Desc.map((item, index) => (
                <div key={index}>
                  <ul className="mx-8 list-disc ">
                    <li className="text-[17px] py-1 font-bold">
                      {item?.title}{" "}
                      <span className="font-normal">{item?.desc}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="py-4">
              <h1 className="text-xl font-bold ">{privacy?.infoTitle}</h1>
              <h4 className="text-[17px] pt-3">{privacy?.infoSubtitle}</h4>
              <div className="py-4">
                {privacy.infoStep.map((item, index) => (
                  <div key={index}>
                    <ul className="mx-8 list-disc ">
                      <li className="text-[17px] py-1 font-bold">
                        {item?.title}{" "}
                        <span className="font-normal">{item?.desc}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-xl font-bold ">{privacy?.personalInfo}</h1>
              <p className="text-[17px] py-5">{privacy?.info1}</p>
              <p className="text-[17px] py-4">{privacy?.info2}</p>
              <p className="text-[17px] py-4">{privacy?.proTitle}</p>
              <div className="py-3">
                {privacy.process.map((item, index) => (
                  <div key={index}>
                    <ul className="mx-8 list-disc ">
                      <li className="text-[17px] py-1">{item?.pro}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-bold ">{privacy?.shareTitle}</h1>
              <p className="text-[17px] py-3">{privacy?.share1}</p>
              <p className="text-[17px] py-3">{privacy?.share2}</p>
            </div>
            <div className="py-2">
              <h1 className="text-xl font-bold ">{privacy?.consents}</h1>
              <p className="text-[17px] py-5">{privacy?.constep1}</p>
              <p className="text-[17px] py-5">{privacy?.constep2}</p>
            </div>
            <div className="py-4">
              <h1 className="text-xl font-bold ">{privacy?.protect}</h1>
              <p className="text-[17px] py-5">{privacy?.proInfo1}</p>
              <p className="text-[17px]">{privacy?.proInfo2}</p>
            </div>
            <div className="py-4">
              <h1 className="text-xl font-bold ">{privacy?.retain}</h1>
              <p className="text-[17px] py-5">{privacy?.retainStep}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold ">{privacy?.title}</h1>
              <h4 className="text-[17px] pt-3">{privacy?.subTitle}</h4>
              <div className="py-4">
                {privacy.Right.map((item, index) => (
                  <div key={index}>
                    <ul className="mx-8 list-disc ">
                      <li className="text-[17px] py-1 font-bold">
                        {item?.title}{" "}
                        <span className="font-normal">{item?.right}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4">
            {privacy.contact.map((item, index) => (
              <div key={index}>
                <h1 className="text-xl font-bold ">{item?.title}</h1>
                <ul className="">
                  <li className="text-[17px] ">
                    <a href="mailto: help@ghana.gov.gh"> {item?.email}</a>
                  </li>
                  <li className="text-[17px] ">
                    <a href="mailto: 030700575"> {item?.call}</a>
                  </li>
                  <li className="text-[17px] ">
                    <a href="mailto: 030700575"> {item?.website}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="py-4">
          <h1 className="text-xl font-bold ">{privacy?.defTitle}</h1>
                {privacy.defStep.map((item, index) => (
                  <div key={index}>
                    <ul className="mx-8 list-disc ">
                      <li className="text-[17px] py-1 font-bold">
                        {item?.title}{" "}
                        <span className="font-normal">{item?.desc}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
        </div>
      ))}
     </div>
     <Form />
    </>
  );
};

export default Privacy;
