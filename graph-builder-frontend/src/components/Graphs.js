import React from "react";
import { useState } from "react";
import GraphsModal from "./GraphsModal";

const Graphs = () => {
  const [openSavedGraphs, setOpenSavedGraphs] = useState(false);

  return (
    <div className=" text-white flex items-center justify-center align-middle">
      <button
        className=" [border-color:var(--font-secondary)] p-2 px-8 rounded-lg border-2 hover:bg-zinc-700 duration-300"
        onClick={() => setOpenSavedGraphs(true)}
      >
        Saved Graphs
      </button>
      {openSavedGraphs && (
        <GraphsModal setOpenSavedGraphs={setOpenSavedGraphs} />
      )}
    </div>
  );
};

export default Graphs;
