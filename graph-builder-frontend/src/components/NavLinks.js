import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isColumn }) => {
  return (
    <nav>
      <ul className={`flex ${isColumn ? "flex-col" : "flex-row"} gap-16 text-xl font-bold`}>
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
    </nav>
  );
};

export default NavLinks;
