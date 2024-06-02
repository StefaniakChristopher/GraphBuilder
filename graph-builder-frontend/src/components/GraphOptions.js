import React from "react";
import { useState } from "react";
import { magnitudeChecker, categoryChecker } from "../inputCheck";
import api from "axios";
import { host } from "../host";

const GraphOptions = ({ setCurrentGraph }) => {
  const [newGraph, setNewGraph] = useState({
    title: null,
    xAxisLabel: null,
    yAxisLabel: null,
    categories: [],
    xAxisValues: [],
  });

  const [currentMessage, setCurrentMessage] = useState("");

  const postGraph = async (newGraph) => {
    try {
      const { title, xAxisLabel, yAxisLabel, categories, xAxisValues } =
        newGraph;
      if (categories && xAxisValues && title && xAxisLabel && yAxisLabel) {
        console.log("cat");
        if (magnitudeChecker(xAxisValues)) {
          if (categoryChecker(categories)) {
            const builtGraph = await api.post(host + "/graphs", newGraph);
            setCurrentGraph(builtGraph.data);
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
        xAxisValues ||
        title ||
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

  const [categoryAmt, setCategoryAmt] = useState(2);

  const createCategories = () => {
    let categoryArr = [];
    for (let i = 0; i <= categoryAmt; i++) {
      categoryArr.push(
        <div key={i} className=" flex gap-4 mb-4">
          <input
            type="text"
            placeholder={`Category ${i + 1}`}
            className="p-4 rounded-lg w-[450px] text-lg"
            onChange={(e) => {
              let newCategories = [...newGraph.categories];

              newCategories[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                categories: newCategories,
              }));
            }}
          />
          <input
            type="number"
            placeholder={`Value ${i + 1}`}
            className="p-4 rounded-lg w-[450px] text-lg"
            onChange={(e) => {
              let newValues = [...newGraph.xAxisValues];

              newValues[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                xAxisValues: newValues,
              }));
            }}
          />
        </div>
      );
    }
    return categoryArr;
  };

  return (
    <div className="p-10">
      <div className=" flex flex-col align-middle">
        <label
          className="text-white text-3xl mb-3 font-bold"
          htmlFor="graphTitle"
        >
          Create Graph
        </label>
      </div>
      <div className="flex gap-4 mt-4">
        <input
          id="graphTitle"
          type="text"
          onChange={(e) =>
            setNewGraph((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          placeholder="Enter Graph Title"
          className="p-2 rounded-lg w-[250px]"
        />
        <input
          type="text"
          placeholder="Categories Label"
          className="p-2 rounded-lg w-[250px]"
          onChange={(e) => {
            setNewGraph((prevState) => ({
              ...prevState,
              xAxisLabel: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Values Label"
          className="p-2 rounded-lg w-[250px]"
          onChange={(e) => {
            setNewGraph((prevState) => ({
              ...prevState,
              yAxisLabel: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex items-center align-middle text-white gap-4 my-4">
        <button
          onClick={() => setCategoryAmt(categoryAmt - 1)}
          className="w-[450px] bg-blue-600 rounded-lg p-3 hover:bg-blue-500 duration-300"
        >
          Remove Category
        </button>
        <button
          onClick={() => setCategoryAmt(categoryAmt + 1)}
          className="w-[450px] bg-blue-600 rounded-lg p-3 hover:bg-blue-500 duration-300"
        >
          Add Category
        </button>
      </div>
      <div className="flex flex-col">{createCategories()}</div>
      <div className="flex items-center">
        {categoryAmt > 0 && (
          <button
            onClick={() => postGraph(newGraph)}
            className="bg-blue-600 w-[918px] rounded-lg p-4 text-3xl font-extrabold text-white  hover:bg-blue-500 duration-300"
          >
            CREATE GRAPH
          </button>
        )}
      </div>
    </div>
  );
};

export default GraphOptions;
