import React from "react";
import { useState } from "react";
import { magnitudeChecker, categoryChecker } from "../inputCheck";
import api from "axios";
import { host } from "../host";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const GraphOptions = ({ setCurrentGraph, graphHeight, setGraphHeight }) => {
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
      const response = await api.post(host + "/graphs", newGraph);
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

  const [categoryAmt, setCategoryAmt] = useState(2);

  const createCategories = () => {
    let categoryArr = [];
    for (let i = 0; i <= categoryAmt; i++) {
      categoryArr.push(
        // dyanmic category input
        <div key={i} className=" flex gap-4 mb-4">
          <input
            type="text"
            placeholder={`Category ${i + 1}`}
            className="p-4 rounded-lg w-[165px] text-lg"
            onChange={(e) => {
              let newCategories = [...newGraph.categories];

              newCategories[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                categories: newCategories,
              }));
            }}
          />
          {/* dynamic number input */}
          <input
            type="number"
            placeholder={`Value ${i + 1}`}
            className="p-4 rounded-lg w-[165px] text-lg"
            onChange={(e) => {
              let newValues = [...newGraph.categoryValues];

              newValues[i] = e.target.value;
              setNewGraph((prevState) => ({
                ...prevState,
                categoryValues: newValues,
              }));
            }}
          />
        </div>
      );
    }
    return categoryArr;
  };

  return (
    <div className="p-10 w-1/5">
      {/* header */}
      <div className=" flex items-center justify-center align-middle">
        <label className="text-white text-3xl font-bold" htmlFor="graphTitle">
          Create Graph
        </label>
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
          className="p-2 mb-3 rounded-lg w-[350px]"
        />
        {/* label for categories */}
        <input
          type="text"
          placeholder="Categories Label"
          className="p-2 rounded-lg mb-3 w-[350px]"
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
          className="p-2 rounded-lg w-[350px] mb-3"
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
          <select className="p-2 rounded-lg w-[350px] mt-1">
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
          </select>
        </div>
      </div>
      {/* entry increase/decrease buttons */}
      <div className="flex items-center align-middle justify-between text-white gap-4 my-4">
        <button
          onClick={() => {
            setCategoryAmt(categoryAmt - 1);
            setGraphHeight(graphHeight - 70);
          }}
          className={`w-[45px] rounded-lg p-2 duration-300 text-2xl flex items-center justify-center align-middle ml-16 ${
            categoryAmt === 1
              ? "cursor-disabled bg-slate-500 disabled:"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
          disabled={categoryAmt === 1 ? true : false}
        >
          <CiCircleMinus />
        </button>
        <button
          onClick={() => {
            setCategoryAmt(categoryAmt + 1);
            setGraphHeight(graphHeight + 70);
          }}
          className={`w-[45px] bg-blue-600 rounded-lg p-2 hover:bg-blue-500 duration-300 text-2xl flex items-center justify-center align-middle mr-16`}
        >
          <CiCirclePlus />
        </button>
      </div>
      {/* dynamic entry generation */}
      <div className="flex flex-col">{createCategories()}</div>
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
