import React, { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { mobileNavigation } from "../../assets/Navigation";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <AiOutlineClose className="text-gray-500 w-7 h-7" />
        ) : (
          <HiOutlineBars3BottomLeft className="w-8 h-8 " />
        )}
      </button>
      <div
        className={`${
          openMenu ? "top-20 left-0" : "-top-full right-0"
        } bg-white z-40 shadow-xl w-full fixed`}
      >
        <ul>
          {mobileNavigation.map((navItem) => (
            <li key={navItem.id}>
              <Link
                to={navItem.path}
                className="flex items-center justify-between px-4 py-5 text-base uppercase border-t border-b"
              >
                <span className=" hover:underline">{navItem.display}</span>{" "}
                <span>
                  <VscChevronRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
