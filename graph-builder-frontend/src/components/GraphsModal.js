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
import { graphsServiceHost } from "../host";
import { GrDocumentTransfer } from "react-icons/gr";

// UNUSED COMPONENT

const GraphsModal = ({ setOpenSavedGraphs, setCurrentGraph }) => {
  const modalRef = useRef();
  const overlayRef = useRef();

  const [graphs, setGraphs] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchGraphs = async () => {
    const { data } = await axios(`${graphsServiceHost}/allgraphs`);

    const entries = Object.entries(data);
    console.log(entries);
    setGraphs(entries);
  };

  const deleteGraph = async (graph) => {
    try {
      const response = await axios.delete(graphsServiceHost + "/graphs/" + graph.id);
      if (response.status === 200) {
        setGraphs(graphs.filter(([arrPos, g]) => g !== graph));
      }
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  };

  const displayGraph = (graph) => {
    console.log(graph);
    setCurrentGraph(graph);
    setOpenSavedGraphs(false);
  };

  useEffect(() => {
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
    // container for both overlay and modal
    <section
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center align-middle z-[1] transition-opacity duration-300 opacity-0"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className=" absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 "
        onClick={() => setOpenSavedGraphs(false)}
      ></div>
      {/* Modal */}
      <div className="fixed [background-color:] p-7 rounded-md z-[2]">
        <div className="w-[800px] h-[600px] [background-color:var(--font-primary)]">
          {/* top bar of modal */}
          <nav className="flex justify-between items-center align-middle p-5">
            <h2 className=" text-xl font-bold">Graphs</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Graphs"
                className="p-2 pr-10 rounded-lg w-[300px] border-2 border-gray-300 text-black"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <HiMiniMagnifyingGlass className="absolute right-2 top-3 text-black text-xl" />
            </div>
            <button onClick={() => setOpenSavedGraphs(false)}>
              <RxCross1 />
            </button>
          </nav>
          {/* line */}
          <div className="flex justify-center">
            <hr className="w-[700px] mt-3 mb-6"></hr>
          </div>
          {/* graphs selection */}
          <div className="flex justify-center align-middle items-center flex-col">
            {graphs.length > 0 ? (
              graphs
                .filter(([_, graph]) =>
                  graph.title.toLowerCase().includes(searchText.toLowerCase())
                )
                .map(([index, graph]) => (
                  <div
                    key={index}
                    className="flex border-white border-2 p-2 w-[750px] mb-4 justify-between items-center "
                  >
                    <h3 className="text-lg font-bold">{graph.title}</h3>
                    <span>{graph.date}</span>
                    <span>{graph.time}</span>
                    <div className="flex items-center">
                      <button onClick={() => displayGraph(graph)}>
                        <GrDocumentTransfer className=" text-lg hover:text-red-700 duration-300" />
                      </button>
                      <button
                        className=" ml-6"
                        onClick={() => deleteGraph(graph)}
                      >
                        <FaRegTrashAlt className=" text-lg hover:text-red-700 duration-300" />
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <div className=" text-2xl font-bold">No Graphs Available</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphsModal;
