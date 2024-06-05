import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="[background-color:var(--bg-secondary)] justify-between align-middle items-center flex [color:var(--font-secondary)]">
      <div>
        <h1 className="p-4 ml-4 font-extrabold text-2xl">Graph Crafter</h1>
      </div>

      <ul className="flex gap-16 text-xl font-bold">
        <li>
          <Link
            to="/"
            className=" hover:text-cyan-600 cursor-pointer duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/creategraph"
            className=" hover:text-cyan-600 cursor-pointer duration-300"
          >
            Create Graph
          </Link>
        </li>
        <li>
          <Link
            to="/savedgraphs"
            className=" hover:text-cyan-600 cursor-pointer duration-300"
          >
            My Graphs
          </Link>
        </li>
        {/* <li>
          <Link className=" hover:text-cyan-600 cursor-pointer duration-300">
            Templates
          </Link>
        </li> mayiyyyyyyyyyybe later*/}
        <li>
          <Link
            to="/about"
            className=" hover:text-cyan-600 cursor-pointer duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className=" hover:text-cyan-600 cursor-pointer duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className=" p-2 mr-4">
        <button className=" bg-red-700 p-2 px-6 rounded-lg hover:bg-red-600 duration-300 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
