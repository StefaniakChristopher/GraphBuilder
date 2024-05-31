import React, { useState } from "react";
import GraphOptions from "./components/GraphOptions";
import GraphStructure from "./components/GraphStructure";
import Navbar from "./components/Navbar";
import Graphs from "./components/Graphs";

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
    <div>
      <Navbar />
      <GraphStructure
        currentGraph={currentGraph}
        setCurrentGraph={setCurrentGraph}
      />
      <Graphs setCurrentGraph={setCurrentGraph} />
      <GraphOptions setCurrentGraph={setCurrentGraph} />
    </div>
  );
}

export default App;
