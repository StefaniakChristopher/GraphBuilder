import React, { useState } from 'react';
import api from 'axios';

import './App.css';
import GraphOptions from './GraphOptions';
import GraphStructure from './GraphStructure';
import RetrieveGraph from './RetrieveGraph';

function App() {
  const [getGraphID, setGetGraphID] = useState();
  const [graphTitle, setGraphTitle] = useState();
  const [xAxisLabel, setXAxisLabel] = useState();
  const [yAxisLabel, setYAxisLabel] = useState();
  const [categories, setCategories] = useState();
  const [xAxisMagnitude, setXAxisMagnitude] = useState();
  const [newGraph, setNewGraph] = useState();
  const [graphID, setGraphID] = useState(0);
  const [deleteGraphID, setDeleteGraphID] = useState();
  const [currentMessage, setCurrentMessage] = useState("Welcome to Graph Builder");
  const [currentGraph, setCurrentGraph] = useState(
    {
      id: 0,
      categories: ["Category 1", "Category 2", "Category 3"],
      magnitude: 30,
      xAxisMagnitude: [13, 4, 23],
      yAxisIncrements: [5, 10, 15, 20, 25, 30, 35, 40],
      title: "GRAPH TITLE",
      yAxisLabel: "Y axis Label",
      xAxisLabel: "X axis Label"
    }
  );

  const magnitudeChecker = (xAxisMagnitude) => {

    let digitCounter = 0
    console.log(digitCounter)
    for (let i = 0; i < xAxisMagnitude.length; i++) {
      if (typeof xAxisMagnitude[i] === "string") {
        digitCounter += 1

      }
      if (xAxisMagnitude[i] === ",") {
        digitCounter = 0
      }

      if (digitCounter > 5) {
        return 0
      }
      console.log(digitCounter)
      console.log(typeof xAxisMagnitude[i])
    }

    return 1
  };

  const categoryChecker = (categories) => {

    let charCounter = 0
    console.log(charCounter)
    for (let i = 0; i < categories.length; i++) {
      if (typeof categories[i] === "string") {
        charCounter += 1

      }
      if (categories[i] === ",") {
        charCounter = 0
      }

      if (charCounter > 40) {
        return 0
      }
      console.log(charCounter)
      console.log(typeof categories[i])
    }

    return 1
  };




  const fetchGraph = async (getGraphID) => {
    try {
      console.log(getGraphID);
      const { data } = await api.get('http://localhost:8080/graphs/' + getGraphID);
      const { id, categories, magnitude, xAxisMagnitude, yAxisIncrements, title, yAxisLabel, xAxisLabel } = data;
      const newIncommingGraph = { id, categories, magnitude, xAxisMagnitude, yAxisIncrements, title, yAxisLabel, xAxisLabel };
      console.log(newIncommingGraph);
      setCurrentGraph(newIncommingGraph)

    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }

  const postGraph = async (newGraph) => {
    try {
      if (categories && xAxisMagnitude && graphTitle && xAxisLabel && yAxisLabel) {
        if (magnitudeChecker(xAxisMagnitude)) {
          if (categoryChecker(categories)) {
            console.log(newGraph);
            const response = await api.post('http://localhost:8080/graphs', newGraph);
            setCurrentMessage(response.data)
          } else {
            setCurrentMessage("Individual categories must be lower than 40 characters")
          }

        } else {
          setCurrentMessage("Magnitudes must be lower than 6 digits")
        }
      } else if (categories || xAxisMagnitude || graphTitle || xAxisLabel || yAxisLabel) {
        setCurrentMessage("Graph is incomplete, please finish the graph")
      } else {
        setCurrentMessage("Please fill out the given paramters")
      }

    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }

  const deleteGraph = async (deleteGraphID) => {
    try {
      console.log(deleteGraphID)
      const response = await api.delete('http://localhost:8080/graphs/' + deleteGraphID);
      setCurrentMessage(response.data)

    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }




  return (
    <div>
      <header>
        <h1>
          GRAPH BUILDER
        </h1>
      </header>
      <GraphStructure
        currentGraph={currentGraph}
        setCurrentGraph={setCurrentGraph}
        setCurrentMessage={setCurrentMessage}
      />
      <RetrieveGraph
        fetchGraph={fetchGraph}
        getGraphID={getGraphID}
        setGetGraphID={setGetGraphID}
        deleteGraph={deleteGraph}
        deleteGraphID={deleteGraphID}
        setDeleteGraphID={setDeleteGraphID}
        currentMessage={currentMessage}
        setCurrentGraph={setCurrentMessage}
      />
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
