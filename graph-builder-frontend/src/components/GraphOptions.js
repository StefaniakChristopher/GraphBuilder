import React, { useEffect } from "react";
import { useRef, useState } from "react";

const GraphOptions = ({
  graphTitle,
  setGraphTitle,
  xAxisLabel,
  setXAxisLabel,
  yAxisLabel,
  setYAxisLabel,
  xAxisValues,
  setXAxisValues,
  categories,
  setCategories,
  newGraph,
  setNewGraph,
  postGraph,
}) => {
  useEffect(() => {
    setNewGraph({
      title: graphTitle,
      xAxisLabel: xAxisLabel,
      yAxisLabel: yAxisLabel,
      categories: categories,
      xAxisValues: xAxisValues,
    });
  }, [
    graphTitle,
    xAxisLabel,
    yAxisLabel,
    categories,
    xAxisValues,
    setNewGraph,
  ]);

  const [categoryAmt, setCategoryAmt] = useState(3);

  const createCategories = () => {
    let categoryArr = [];
    for (let i = 0; i <= categoryAmt; i++) {
      categoryArr.push(
        <div key={i} className=" flex gap-4 mb-4">
          <input
            type="text"
            placeholder={`Category ${i + 1}`}
            className="p-4 rounded-lg w-[600px] text-lg"
            onChange={(e) => {
              let newCategories = [...categories];
              newCategories[i] = e.target.value;
              setCategories(newCategories);
            }}
          />
          <input
            type="number"
            placeholder={`Value ${i + 1}`}
            className="p-4 rounded-lg w-[600px] text-lg"
            onChange={(e) => {
              let newValues = [...xAxisValues];
              newValues[i] = e.target.value;
              setXAxisValues(newValues);
            }}
          />
        </div>
      );
    }
    return categoryArr;
  };

  return (
    <div>
      <div className=" flex flex-col items-center align-middle">
        <label htmlFor="graphTitle">Create Graph</label>
        <input
          id="graphTitle"
          type="text"
          value={graphTitle}
          onChange={(e) => setGraphTitle(e.target.value)}
          placeholder="Enter Graph Title"
          className="p-2 rounded-lg w-[200px]"
        />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Categories Label"
          className="p-2 rounded-lg w-[250px]"
          onChange={(e) => {
            setXAxisLabel(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Values Label"
          className="p-2 rounded-lg w-[250px]"
          onChange={(e) => {
            setYAxisLabel(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center align-middle justify-center text-white gap-4 my-4">
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
      <div className="flex items-center flex-col">{createCategories()}</div>
      <div className="flex items-center justify-center">
        {categoryAmt > 0 && (
          <button
            onClick={() => postGraph(newGraph)}
            className="bg-blue-600 w-[1000px] rounded-lg p-4 text-3xl font-extrabold text-white  hover:bg-blue-500 duration-300"
          >
            CREATE GRAPH
          </button>
        )}
      </div>

      {/* <br></br>
      <div style={{ display: "inline-block" }}>
        <label htmlFor="xAxisLabel">X-Axis Label: </label>
        <input
          id="xAxisLabel"
          type="text"
          value={xAxisLabel}
          onChange={(e) => setXAxisLabel(e.target.value)}
        ></input>
      </div>

      <div style={{ display: "inline-block" }}>
        <label htmlFor="yAxisLabel">Y-Axis Label: </label>
        <input
          id="yAxisLabel"
          type="text"
          value={yAxisLabel}
          onChange={(e) => setYAxisLabel(e.target.value)}
        ></input>
      </div>
      <div style={{ display: "inline-block" }}>
        <label htmlFor="categories">Categories (comma-seprated): </label>
        <textarea
          wrap="soft"
          spellCheck="false"
          id="categories"
          type="text"
          rows="5"
          cols="30"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        ></textarea>
      </div>
      <div style={{ display: "inline-block" }}>
        <label htmlFor="xAxisValues">
          Magnitudes for those Categories (comma-seprated):{" "}
        </label>
        <textarea
          spellCheck="false"
          id="xAxisValues"
          type="text"
          rows="5"
          cols="30"
          value={xAxisValues}
          onChange={(e) => setXAxisValues(e.target.value)}
        ></textarea>
        <button type="submit" onClick={() => postGraph(newGraph)}>
          Create Graph
        </button>
      </div> */}
    </div>
  );
};

export default GraphOptions;
