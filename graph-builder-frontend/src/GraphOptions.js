import React, { useEffect } from "react";

const GraphOptions = ({
  graphTitle,
  setGraphTitle,
  xAxisLabel,
  setXAxisLabel,
  yAxisLabel,
  setYAxisLabel,
  xAxisMagnitude,
  setXAxisMagnitude,
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
      xAxisMagnitude: xAxisMagnitude,
    });
  }, [
    graphTitle,
    xAxisLabel,
    yAxisLabel,
    categories,
    xAxisMagnitude,
    setNewGraph,
  ]);

  return (
    <div>
      <br></br>
      <br></br>

      <label htmlFor="graphTitle">Graph Title: </label>
      <input
        id="graphTitle"
        type="text"
        value={graphTitle}
        onChange={(e) => setGraphTitle(e.target.value)}
      ></input>

      <br></br>
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
        <label htmlFor="xAxisMagnitude">
          Magnitudes for those Categories (comma-seprated):{" "}
        </label>
        <textarea
          spellCheck="false"
          id="xAxisMagnitude"
          type="text"
          rows="5"
          cols="30"
          value={xAxisMagnitude}
          onChange={(e) => setXAxisMagnitude(e.target.value)}
        ></textarea>
        <button type="submit" onClick={() => postGraph(newGraph)}>
          Create Graph
        </button>
      </div>
    </div>
  );
};

export default GraphOptions;
