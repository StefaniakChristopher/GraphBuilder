import React from "react";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { graphsServiceHost } from "../host";
import { GrDocumentTransfer } from "react-icons/gr";

const SearchGraph = ({ setOpenSavedGraphs, setCurrentGraph }) => {
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
  };

  useEffect(() => {
    fetchGraphs();
  }, []);

  return (
    <div className="p-10 flex flex-col items-center w-3/5 2xl:w-[400px] min-w-[400px]">
      <h2 className="text-3xl font-bold text-white">Saved Graphs</h2>
      {/* search bar */}
      <nav className="flex justify-center items-center align-middle p-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Graphs"
            className="p-2 pr-10 rounded-lg w-[300px] border-2 border-gray-300 text-black"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <HiMiniMagnifyingGlass className="absolute right-2 top-3 text-black text-xl" />
        </div>
      </nav>
      {/* line */}
      <div className="flex w-full justify-center">
        <hr className="w-full mt-3 mb-6"></hr>
      </div>
      {/* graphs selection */}
      <div className="flex align-middle items-center flex-col 2xl:h-[800px] h-[500px] w-full p-2 overflow-y-auto text-white">
        {graphs.length > 0 ? (
          graphs
            .filter(([_, graph]) =>
              graph.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map(([index, graph]) => (
              <div
                key={index}
                className="flex border-white border-2 p-2 2xl:w-[300px] w-full mb-4 justify-between items-center "
              >
                <h3 className="text-lg font-bold">{graph.title}</h3>
                <span>{graph.date}</span>
                <span>{graph.time}</span>
                <div className="flex items-center">
                  <button onClick={() => displayGraph(graph)}>
                    <GrDocumentTransfer className=" text-lg hover:text-green-700 duration-300" />
                  </button>
                  <button className=" ml-6" onClick={() => deleteGraph(graph)}>
                    <FaRegTrashAlt className=" text-lg hover:text-red-700 duration-300" />
                  </button>
                </div>
              </div>
            ))
        ) : (
          <div className=" text-2xl font-bold text-white">
            No Graphs Available
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchGraph;
