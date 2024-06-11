import React from "react";

import Nav from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="[background-color:var(--bg-secondary)] justify-between align-middle items-center flex [color:var(--font-secondary)]">
      <div>
        <h1 className="p-4 ml-4 font-extrabold text-2xl">
          <Link to="/">Graph Crafter</Link>
        </h1>
      </div>
      <Nav />

      <div className=" p-2 mr-4">
        <button className=" bg-red-700 p-2 px-6 rounded-lg hover:bg-red-600 duration-300 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
