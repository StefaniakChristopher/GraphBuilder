import React from "react";
import GraphOptions from "./GraphOptions";
import GraphItself from "./GraphItself";
import { useState } from "react";

const BuildGraph = ({ currentGraph, setCurrentGraph }) => {
  const [graphHeight, setGraphHeight] = useState(900);
  return (
    <div className="flex items-start">
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
