import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Nav from "./NavLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="[background-color:var(--font-primary)] [color:var(--font-secondary)] mt-10">
      <div className="flex justify-between p-6 px-8 items-center">
        <h4 className="text-2xl font-extrabold">Graph Crafter</h4>
        <Nav />
        <ul className="flex gap-3 text-md lg:text-xl">
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
      </div>
      <div className="mt-2 flex justify-center items-center pb-7">
        <p>Graph Crafter &copy; {currentYear}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
