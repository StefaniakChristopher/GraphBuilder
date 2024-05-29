import React, { useState } from "react";
import api from "axios";

import GraphOptions from "./components/GraphOptions";
import GraphStructure from "./components/GraphStructure";
import Navbar from "./components/Navbar";
import Graphs from "./components/Graphs";
import { host } from "./host";

function App() {
  const [getGraphID, setGetGraphID] = useState();
  const [graphTitle, setGraphTitle] = useState();
  const [xAxisLabel, setXAxisLabel] = useState();
  const [yAxisLabel, setYAxisLabel] = useState();
  const [categories, setCategories] = useState();
  const [xAxisMagnitude, setXAxisMagnitude] = useState();
  const [newGraph, setNewGraph] = useState();
  const [graphID, setGraphID] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(
    "Welcome to Graph Builder"
  );
  const [currentGraph, setCurrentGraph] = useState({
    id: 0,
    categories: ["Category 1", "Category 2", "Category 3"],
    magnitude: 30,
    xAxisMagnitude: [10, 4, 23],
    yAxisIncrements: [5, 10, 15, 20, 25, 30, 35, 40],
    title: "GRAPH TITLE",
    yAxisLabel: "Y axis Label",
    xAxisLabel: "X axis Label",
  });

  const magnitudeChecker = (xAxisMagnitude) => {
    let digitCounter = 0;
    console.log(digitCounter);
    for (let i = 0; i < xAxisMagnitude.length; i++) {
      if (typeof xAxisMagnitude[i] === "string") {
        digitCounter += 1;
      }
      if (xAxisMagnitude[i] === ",") {
        digitCounter = 0;
      }

      if (digitCounter > 5) {
        return 0;
      }
      console.log(digitCounter);
      console.log(typeof xAxisMagnitude[i]);
    }

    return 1;
  };

  const categoryChecker = (categories) => {
    let charCounter = 0;
    console.log(charCounter);
    for (let i = 0; i < categories.length; i++) {
      if (typeof categories[i] === "string") {
        charCounter += 1;
      }
      if (categories[i] === ",") {
        charCounter = 0;
      }

      if (charCounter > 40) {
        return 0;
      }
      console.log(charCounter);
      console.log(typeof categories[i]);
    }

    return 1;
  };

  const postGraph = async (newGraph) => {
    try {
      if (
        categories &&
        xAxisMagnitude &&
        graphTitle &&
        xAxisLabel &&
        yAxisLabel
      ) {
        if (magnitudeChecker(xAxisMagnitude)) {
          if (categoryChecker(categories)) {
            console.log(newGraph);
            const response = await api.post(host + "/graphs", newGraph);
            setCurrentMessage(response.data);
          } else {
            setCurrentMessage(
              "Individual categories must be lower than 40 characters"
            );
          }
        } else {
          setCurrentMessage("Magnitudes must be lower than 6 digits");
        }
      } else if (
        categories ||
        xAxisMagnitude ||
        graphTitle ||
        xAxisLabel ||
        yAxisLabel
      ) {
        setCurrentMessage("Graph is incomplete, please finish the graph");
      } else {
        setCurrentMessage("Please fill out the given paramters");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  };

  return (
    <div>
      <Navbar />
      <GraphStructure
        currentGraph={currentGraph}
        setCurrentGraph={setCurrentGraph}
        setCurrentMessage={setCurrentMessage}
      />
      <Graphs setCurrentGraph={setCurrentGraph} />
      <GraphOptions
        graphTitle={graphTitle}
        setGraphTitle={setGraphTitle}
        xAxisLabel={xAxisLabel}
        setXAxisLabel={setXAxisLabel}
        yAxisLabel={yAxisLabel}
        setYAxisLabel={setYAxisLabel}
        xAxisMagnitude={xAxisMagnitude}
        setXAxisMagnitude={setXAxisMagnitude}
        categories={categories}
        setCategories={setCategories}
        newGraph={newGraph}
        setNewGraph={setNewGraph}
        graphID={graphID}
        setGraphID={setGraphID}
        postGraph={postGraph}
      />
    </div>
  );
}

export default App;
