import React from "react";
import { useState } from "react";
import api from "axios";
import { graphsServiceHost } from "../host";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const GraphOptions = ({ setCurrentGraph }) => {
  const [newGraph, setNewGraph] = useState({
    title: null,
    xAxisLabel: null,
    yAxisLabel: null,
    categories: [],
    categoryValues: [],
  });

  const [currentMessage, setCurrentMessage] = useState("");

  const postGraph = async (newGraph) => {
    setCurrentMessage("");
    try {
      const response = await api.post(graphsServiceHost + "/graphs", newGraph);
      setCurrentGraph(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);

      if (err.response.status == 400) {
        setCurrentMessage(err.response.data.message);
      } else if (err.response.status !== 200) {
        setCurrentMessage("An error occurred. Please try again.");
      }
    }
  };

  const [categoryAmt, setCategoryAmt] = useState(4);

  const createCategories = () => {
    let categoryArr = [];
    for (let i = 0; i <= categoryAmt; i++) {
      categoryArr.push(
        // dyanmic category input
        <div
          key={i}
          className=" bg-transparent mb-4 rounded-lg flex text-white"
        >
          <input
            type="text"
            placeholder={`Category ${i + 1}`}
            className="p-4 rounded-lg w-1/2 text-lg border-r-4 bg-transparent focus:outline-none"
            onChange={(e) => {
              let newCategories = [...newGraph.categories];

              newCategories[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                categories: newCategories,
              }));

              if (i === categoryAmt) {
                setCategoryAmt(categoryAmt + 1);
              }
            }}
          />
          {/* dynamic number input */}
          <input
            type="number"
            placeholder={`Value ${i + 1}`}
            className="p-4 rounded-lg w-[37%] text-lg border-r-4 bg-transparent focus:outline-none"
            onChange={(e) => {
              let newValues = [...newGraph.categoryValues];

              newValues[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                categoryValues: newValues,
              }));

              if (i === categoryAmt) {
                setCategoryAmt(categoryAmt + 1);
              }
            }}
          />
          {/* delete input pair button */}
          <button
            className="px-2 hover:text-red-700 duration-300"
            onClick={() => {
              if (categoryAmt > 1) {
                let newCategories = [...newGraph.categories];
                let newValues = [...newGraph.categoryValues];
                newCategories.splice(i, 1);
                newValues.splice(i, 1);
                setNewGraph((prevState) => ({
                  ...prevState,
                  categories: newCategories,
                  categoryValues: newValues,
                }));
                setCategoryAmt(categoryAmt - 1);
              } else {
                console.log("You must have at least two categories."); // change this to more user friendly message later
              }
            }}
          >
            <RxCross1 />
          </button>
        </div>
      );
    }
    return categoryArr;
  };

  return (
    <div className="p-10 w-4/5 2xl:w-1/5 min-w-[400px] max-w-[600px]">
      {/* header */}
      <div className=" flex items-center justify-center align-middle text-center">
        <h1 className="text-white text-3xl font-bold hidden 2xl:flex">
          Create Graph
        </h1>
      </div>
      <hr className="my-6"></hr>
      {/* graph title input */}
      <div className="mt-4">
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
          className="p-2 mb-3 rounded-lg w-full bg-transparent text-white border-b-2 border-white"
        />
        {/* label for categories */}
        <input
          type="text"
          placeholder="Categories Label"
          className="p-2 rounded-lg mb-3 w-full bg-transparent text-white border-b-2 border-white"
          onChange={(e) => {
            setNewGraph((prevState) => ({
              ...prevState,
              xAxisLabel: e.target.value,
            }));
          }}
        />
        {/* label for values */}
        <input
          type="text"
          placeholder="Values Label"
          className="p-2 rounded-lg w-full mb-3 bg-transparent text-white border-b-2 border-white"
          onChange={(e) => {
            setNewGraph((prevState) => ({
              ...prevState,
              yAxisLabel: e.target.value,
            }));
          }}
        />
        {/* graph type */}
        <div className="mt-2 flex flex-col">
          <label className=" text-white">Select Graph Type: </label>
          <select className="p-2 rounded-lg w-full mt-1 bg-transparent text-white border-2 border-white">
            <option value="bar" className="text-black cursor-pointer">
              Bar
            </option>
            <option value="pie" className="text-black cursor-pointer">
              Pie
            </option>
          </select>
        </div>
      </div>
      {/* dynamic entry generation */}
      <h4 className="text-white my-4">Enter Data:</h4>
      <div className="flex flex-col overflow-y-auto h-[450px]">{createCategories()}</div>
      {/* create graph button */}
      <div className="flex items-center justify-center">
        {categoryAmt > 0 && (
          <button
            onClick={() => postGraph(newGraph)}
            className="bg-blue-600 w-[250px] rounded-lg p-4 text-2xl font-extrabold text-white  hover:bg-blue-500 duration-300"
          >
            CREATE GRAPH
          </button>
        )}
      </div>
      {/* error message */}
      <div className="mt-4 flex justify-center items-center">
        <p className="text-red-600 text-lg">{currentMessage}</p>
      </div>
    </div>
  );
};

export default GraphOptions;
