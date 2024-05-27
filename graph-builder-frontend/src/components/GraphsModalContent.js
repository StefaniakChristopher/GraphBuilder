import React from "react";
import { RxCross1 } from "react-icons/rx";

const GraphsModalContent = () => {
  return (
    <div>
      <nav className="flex justify-between items-center align-middle">
        <h2>Graphs</h2>
        <div>
          <input type="text" placeholder="Search Graphs"></input>
        </div>
        <button>
          <RxCross1 />
        </button>
      </nav>
      <div></div>
    </div>
  );
};

export default GraphsModalContent;
