import React from "react";
import GraphOptions from "./GraphOptions";
import GraphItself from "./GraphItself";


const BuildGraph = ({ currentGraph, setCurrentGraph }) => {



  return (
    <div className="flex 2xl:flex-row flex-col-reverse 2xl:items-start items-center min-h-screen 2xl:h-screen">
      {/* to contain the graph and the input of the graph and set them side by side */}
      <GraphOptions setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
    </div>
  );
};

export default BuildGraph;
