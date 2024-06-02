import React from "react";
import GraphOptions from "./GraphOptions";
import GraphStructure from "./GraphStructure";

const BuildGraph = ({ currentGraph, setCurrentGraph }) => {
  return (
    <div className="flex items-start">
      <GraphOptions setCurrentGraph={setCurrentGraph} />
      <GraphStructure
        currentGraph={currentGraph}
        setCurrentGraph={setCurrentGraph}
      />
    </div>
  );
};

export default BuildGraph;
