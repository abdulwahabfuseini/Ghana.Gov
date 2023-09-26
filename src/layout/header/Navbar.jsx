import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../assets/Navigation";
import { BiSearch } from "react-icons/bi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div>
      <nav aria-label="header" className="h-20 py-2 sm:py-4 Nav">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="logo"
            className="object-contain h-10"
          />
        </Link>
        <ul className="hidden sm:NavItem">
          {navigation.map((navItem, index) => (
            <li
              className="relative py-7 px-6 uppercase before:contents() before:left-0 before:w-0 before:h-1.5 before:bg-yellow-400 before:absolute before:top-0 hover:before:w-full"
              key={index}
            >
              <Link to={navItem.path} ClassName="">{navItem.display}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden grid-cols-2 col-span-1 sm:grid sm:gap-6 lg:gap-0">
          <NavLink to="/login">
            <button className="text-base py-7 px-4 font-semibold uppercase relative before:contents() before:left-0 before:w-0 before:h-1.5 before:bg-yellow-400 before:absolute before:top-0 hover:before:w-full">
              Log in
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="text-base py-7 px-3 font-semibold uppercase relative before:contents() before:left-0 before:w-0 before:h-1.5 before:bg-yellow-400 before:absolute before:top-0 hover:before:w-full">
              sign up
            </button>
          </NavLink>
        </div>
        <div className="flex items-center gap-6 sm:hidden">
          <BiSearch className="w-6 h-6" />
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
