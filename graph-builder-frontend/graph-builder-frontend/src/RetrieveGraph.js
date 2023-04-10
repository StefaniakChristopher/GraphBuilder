import React from 'react'

const RetrieveGraph = ({ fetchGraph, setGetGraphID, getGraphID, deleteGraph, deleteGraphID, setDeleteGraphID, currentMessage }) => {


  return (
    <div>
        <label htmlFor="fetchGraph">Retrieve Graph: </label>
        <input 
            id="fetchGraph"
            type="number"
            value={getGraphID}
            onChange={(e) => setGetGraphID(e.target.value)}
        ></input>
        <button type="submit" onClick={() => fetchGraph(getGraphID)}>Submit</button>

        <label htmlFor="deleteGraph"> Delete Graph: </label>
        <input 
            id="deleteGraph"
            type="number"
            value={deleteGraphID}
            onChange={(e) => setDeleteGraphID(e.target.value)}
        ></input>
        <button type="submit" onClick={() => deleteGraph(deleteGraphID)}>Submit</button>
        <p style={{display: 'inline-block'}}>
          {currentMessage}
        </p>
    </div>
  )
}

export default RetrieveGraph