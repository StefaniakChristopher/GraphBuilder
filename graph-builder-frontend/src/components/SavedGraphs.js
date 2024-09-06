import React from "react";
import GraphItself from "./GraphItself";
import SearchGraph from "./SearchGraph";

const SavedGraphs = ({ currentGraph, setCurrentGraph }) => {
  return (
    <div className="flex 2xl:flex-row flex-col-reverse 2xl:items-start 2xl:justify-between items-center min-h-screen 2xl:h-screen">
      <SearchGraph setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
      <div className="w-4/5 text-white flex flex-col items-center 2xl:hidden max-w-[600px] ">
        <h1 className=" text-4xl font-bold  mt-6">Saved Graphs</h1>
        <hr className="my-6 w-full" />
      </div>
    </div>
  );
};

export default SavedGraphs;
