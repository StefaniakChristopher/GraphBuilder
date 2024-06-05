import React from "react";

const Navbar = () => {
  return (
    <nav className="[background-color:var(--bg-secondary)] justify-between align-middle items-center flex [color:var(--font-secondary)]">
      <div>
        <h1 className="p-4 ml-4 font-extrabold text-2xl">Graph Builder</h1>
      </div>

      <ul className="flex gap-16 text-xl font-bold">
        <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            Home
          </a>
        </li>
        <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            Create Graph
          </a>
        </li>
        <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            My Graphs
          </a>
        </li>
        {/* <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            Templates
          </a>
        </li> mayiyyyyyyyyyybe later*/}
        <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            About
          </a>
        </li>
        <li>
          <a className=" hover:text-cyan-600 cursor-pointer duration-300">
            Contact Us
          </a>
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
