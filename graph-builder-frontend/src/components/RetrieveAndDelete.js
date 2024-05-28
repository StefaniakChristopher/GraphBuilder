import React from "react";

const RetrieveAndDelete = ({
  setGetGraphID,
  getGraphID,
  deleteGraph,
  deleteGraphID,
  setDeleteGraphID,
  currentMessage,
}) => {
  return (
    <div>
      <label htmlFor="deleteGraph"> Delete Graph: </label>
      <input
        id="deleteGraph"
        type="number"
        value={deleteGraphID}
        onChange={(e) => setDeleteGraphID(e.target.value)}
      ></input>
      <button type="submit" onClick={() => deleteGraph(deleteGraphID)}>
        Submit
      </button>
      <p style={{ display: "inline-block" }}>{currentMessage}</p>
    </div>
  );
};

export default RetrieveAndDelete;
