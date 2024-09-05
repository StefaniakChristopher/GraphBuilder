import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterResponsive = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="[background-color:var(--font-primary)] [color:var(--font-secondary)] mt-10">
      <div className="flex flex-col items-center p-6 px-8 ">
        <h4 className="text-2xl font-extrabold mb-4">Graph Crafter</h4>
        <ul className="flex gap-12 mb-6 text-2xl">
          <li>
            <a href="#">
              <span>
                <FaYoutube />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FaFacebookF />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FaTwitter />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FaInstagram />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FaLinkedinIn />
              </span>
            </a>
          </li>
        </ul>
        <nav className="flex">
          <ul className={`flex flex-col gap-16 text-xl font-bold mr-8`}>
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
          </ul>
          <ul className={`flex flex-col gap-16 text-xl font-bold`}>
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
      </div>
      <div className="mt-2 flex justify-center items-center pb-7">
        <p>Graph Crafter &copy; {currentYear}. </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterResponsive;
