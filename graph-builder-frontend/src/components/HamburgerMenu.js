import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex flex-col justify-between w-10 h-10 p-2 cursor-pointer"
        onClick={toggleMenu}
      >
        <span
          className={`block h-1 [background-color:var(--font-secondary)] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-[50deg] translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`block h-1 [background-color:var(--font-secondary)] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 [background-color:var(--font-secondary)] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-[50deg] -rot -translate-y-[11px]" : ""
          }`}
        />
      </div>

      {/* Overlay to detect clicks outside the menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 backdrop-blur-lg" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <nav
        className={`absolute top-[64px] left-0 bg-transparent backdrop-blur-lg w-[200px] shadow-lg rounded-br-3xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-4 text-xl">
          <li className="mb-10">
            <Link
              onClick={toggleMenu}
              to="/"
              className=" hover:text-cyan-600 cursor-pointer duration-300 border-b-2 [borderColor:var(--font-secondary)]"
            >
              Home
            </Link>
          </li>
          <li className="mb-10">
            <Link
              onClick={toggleMenu}
              to="/creategraph"
              className=" hover:text-cyan-600 cursor-pointer duration-300 border-b-2 [borderColor:var(--font-secondary)]"
            >
              Create Graph
            </Link>
          </li>
          <li className="mb-10">
            <Link
              onClick={toggleMenu}
              to="/savedgraphs"
              className=" hover:text-cyan-600 cursor-pointer duration-300 border-b-2 [borderColor:var(--font-secondary)]"
            >
              My Graphs
            </Link>
          </li>
          <li className="mb-10">
            <Link
              onClick={toggleMenu}
              to="/about"
              className=" hover:text-cyan-600 cursor-pointer duration-300 border-b-2 [borderColor:var(--font-secondary)]"
            >
              About
            </Link>
          </li>
          <li className="mb-10">
            <Link
              onClick={toggleMenu}
              to="/contact"
              className=" hover:text-cyan-600 cursor-pointer duration-300 border-b-2 [borderColor:var(--font-secondary)]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
