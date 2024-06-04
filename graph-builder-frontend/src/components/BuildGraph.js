import React from "react";
import GraphOptions from "./GraphOptions";
import GraphItself from "./GraphItself";

const BuildGraph = ({ currentGraph, setCurrentGraph }) => {
  return (
    <div className="flex items-start">
      <GraphOptions setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
    </div>
  );
};

export default BuildGraph;
