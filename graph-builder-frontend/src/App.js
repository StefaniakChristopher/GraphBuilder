import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BuildGraph from "./components/BuildGraph";

function App() {
  const [currentGraph, setCurrentGraph] = useState({
    id: 0,
    categories: ["Category 1", "Category 2", "Category 3"],
    magnitude: 30,
    xAxisValues: [10, 4, 23],
    yAxisIncrements: [5, 10, 15, 20, 25, 30, 35, 40],
    title: "GRAPH TITLE",
    yAxisLabel: "Y axis Label",
    xAxisLabel: "X axis Label",
  });

  return (
    <div className="h-full">
      <Navbar />
      <BuildGraph
        currentGraph={currentGraph}
        setCurrentGraph={setCurrentGraph}
      />
      {/* <Graphs setCurrentGraph={setCurrentGraph} /> */}
    </div>
  );
}

export default App;
