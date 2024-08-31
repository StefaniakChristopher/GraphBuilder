import React from "react";
import GraphItself from "./GraphItself";
import SearchGraph from "./SearchGraph";

const SavedGraphs = ({ currentGraph, setCurrentGraph }) => {
  return (
    <div className="flex items-start h-screen">
      <SearchGraph setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
    </div>
  );
};

export default SavedGraphs;
