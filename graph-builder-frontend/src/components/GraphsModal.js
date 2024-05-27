import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  hideScrollbar,
  compensateForScrollbar,
  showScrollbar,
} from "../scrollBarManagement";
import { RxCross1 } from "react-icons/rx";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

const GraphsModal = ({ setOpenSavedGraphs }) => {
  const modalRef = useRef();
  const overlayRef = useRef();

  const [graphs, setGraphs] = useState(null);

  useEffect(() => {
    const fetchGraphs = async () => {
      const result = await axios("https://api.example.com");
    };

    fetchGraphs();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalRef.current && overlayRef.current) {
        modalRef.current.style.opacity = "1";
        overlayRef.current.style.opacity = "0.5";
      }
    }, 1); // 1ms delay to ensure opacity transition works, opacity 0 is source and this is the destination

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    hideScrollbar();

    compensateForScrollbar(scrollbarWidth);

    return () => {
      showScrollbar();
    };
  }, []);

  return (
    <section
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center align-middle z-[1] transition-opacity duration-300 opacity-0"
    >
      <div
        ref={overlayRef}
        className=" absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 "
        onClick={() => setOpenSavedGraphs(false)}
      ></div>
      <div className="fixed [background-color:] p-7 rounded-md z-[2]">
        <div className="w-[800px] h-[600px] [background-color:var(--font-primary)]">
          <nav className="flex justify-between items-center align-middle p-5">
            <h2 className=" text-xl font-bold">Graphs</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Graphs"
                className="p-2 pr-10 rounded-lg w-[300px] border-2 border-gray-300 text-black"
              ></input>
              <HiMiniMagnifyingGlass className="absolute right-2 top-3 text-black text-xl" />
            </div>
            <button onClick={() => setOpenSavedGraphs(false)}>
              <RxCross1 />
            </button>
          </nav>
          <div className="flex justify-center">
            <hr className="w-[700px] mt-3 mb-6"></hr>
          </div>
          <div className="flex justify-center align-middle items-center">
            <div className="flex border-white border-2 p-2 w-[750px] justify-between items-center">
              <h3 className="text-lg font-bold">Graph 1</h3>
              <span>1-21-2024</span>
              <span>1:09 P.M.</span>
              <FaRegTrashAlt className=" text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphsModal;
