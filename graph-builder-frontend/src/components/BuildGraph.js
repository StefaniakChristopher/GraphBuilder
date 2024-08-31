import React from "react";
import GraphOptions from "./GraphOptions";
import GraphItself from "./GraphItself";
import { useState } from "react";

const BuildGraph = ({ currentGraph, setCurrentGraph }) => {
  const [graphHeight, setGraphHeight] = useState(900); // to make it so there is limited white space
  return (
    <div className="flex items-start min-h-screen">
      {/* to contain the graph and the input of the graph and set them side by side */}
      <GraphOptions
        setCurrentGraph={setCurrentGraph}
        graphHeight={graphHeight}
        setGraphHeight={setGraphHeight}
      />
      <GraphItself currentGraph={currentGraph} graphHeight={graphHeight} />
    </div>
  );
};

export default BuildGraph;
