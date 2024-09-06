import React from "react";
import GraphOptions from "./GraphOptions";
import GraphItself from "./GraphItself";


const BuildGraph = ({ currentGraph, setCurrentGraph }) => {



  return (
    <div className="flex 2xl:flex-row flex-col-reverse 2xl:items-start items-center min-h-screen 2xl:h-screen">
      
      {/* to contain the graph and the input of the graph and set them side by side */}
      <GraphOptions setCurrentGraph={setCurrentGraph} />
      <GraphItself currentGraph={currentGraph} />
      <div className="w-4/5 text-white flex flex-col items-center 2xl:hidden max-w-[600px] ">
        <h1 className=" text-4xl font-bold  mt-6">Create Graph</h1>
        <hr className="my-6 w-full" />
      </div>
    </div>
  );
};

export default BuildGraph;
