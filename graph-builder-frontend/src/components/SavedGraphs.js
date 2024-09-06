import React from "react";
import GraphItself from "./GraphItself";
import SearchGraph from "./SearchGraph";

const SavedGraphs = ({ currentGraph, setCurrentGraph }) => {
  return (
    <div className="flex 2xl:flex-row flex-col-reverse 2xl:items-start 2xl:justify-between items-center min-h-screen">
      <SearchGraph setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
    </div>
  );
};

export default SavedGraphs;
