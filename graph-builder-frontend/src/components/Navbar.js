import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";



const Navbar = () => {

  return (
    <nav className="[background-color:var(--bg-secondary)] justify-between align-middle items-center flex [color:var(--font-secondary)]">
      <div className="flex xl:hidden ml-8">
          <HamburgerMenu />
      </div>
      <div className="flex items-center">
        <h1 className="p-4 ml-4 font-extrabold text-2xl">
          <Link to="/">Graph Crafter</Link>
        </h1>
      </div>
      <div className="hidden xl:flex">
        <NavLinks isColumn={false} />
      </div>

      <div className=" p-2 mr-4">
        <button className=" bg-red-700 p-2 px-6 rounded-lg hover:bg-red-600 duration-300 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
