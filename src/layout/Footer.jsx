import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FootLinks } from "../assets/Navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-4 bg-black">
      <nav aria-label="footer" className="grid flex-wrap px-5 py-2 text-white bg-black sm:justify-between place-content-center md:flex sm:px-20 md:px-10 lg:px-36 gap-y-4">
        <div className="Flex">
          <FaTwitter className="w-6 h-6" />
          <FaFacebookF className="w-6 h-6" />
          <FaYoutube className="w-6 h-6" />
        </div>
        <ul className="NavItem gap-3 md:gap-[2vw]">
          {FootLinks.map((foot, index) => (
            <li key={index} className="text-sm sm:text-base">
              <Link>{foot.display}</Link>
            </li>
          ))}
        </ul>
        <div className="items-center justify-between Flex">
          <p className="flex">&copy; 2023<span className="hidden sm:block">-Government of Ghana</span></p>
          <img src="/images/ghana.gov.png" alt="" className="h-6"/>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
